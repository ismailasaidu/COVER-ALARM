
import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { useSEO } from '../../utils/seo';

interface InvoiceItem {
  id: number;
  name: string;
  model: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export default function InvoicePage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';
  const [searchParams] = useSearchParams();
  const invoiceRef = useRef<HTMLDivElement>(null);

  // Fixed the type definition: use commas instead of a semicolon inside the object type
  const [invoiceData, setInvoiceData] = useState<{
    invoiceNumber: string;
    date: string;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    customerAddress: string;
    items: InvoiceItem[];
    notes: string;
  }>({
    invoiceNumber: `INV-${Date.now()}`,
    date: new Date().toISOString().split('T')[0],
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    customerAddress: '',
    items: [],
    notes: ''
  });

  const VAT_RATE = 0.075; // 7.5%

  useSEO({
    title: 'Generate Invoice - FireAlarm.ng',
    description:
      'Generate professional invoices for your fire safety equipment orders with automatic VAT calculation.',
    keywords:
      'invoice, fire safety invoice, VAT invoice Nigeria, fire equipment invoice',
    canonical: `${siteUrl}/invoice`,
  });

  useEffect(() => {
    // Load cart items if coming from cart
    const fromCart = searchParams.get('from') === 'cart';
    if (fromCart) {
      try {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const items = cart.map((item: any) => ({
          id: item.id,
          name: item.name,
          model: item.model,
          quantity: item.quantity,
          unitPrice: item.price,
          total: item.price * item.quantity,
        }));
        setInvoiceData((prev) => ({ ...prev, items }));
      } catch (e) {
        console.error('Failed to parse cart from localStorage', e);
      }
    }
  }, [searchParams]);

  const calculateSubtotal = () => {
    return invoiceData.items.reduce((sum, item) => sum + item.total, 0);
  };

  const calculateVAT = () => {
    return calculateSubtotal() * VAT_RATE;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateVAT();
  };

  const addItem = () => {
    const newItem: InvoiceItem = {
      id: Date.now(),
      name: '',
      model: '',
      quantity: 1,
      unitPrice: 0,
      total: 0,
    };
    setInvoiceData((prev) => ({
      ...prev,
      items: [...prev.items, newItem],
    }));
  };

  const updateItem = (id: number, field: keyof InvoiceItem, value: any) => {
    setInvoiceData((prev) => ({
      ...prev,
      items: prev.items.map((item) => {
        if (item.id === id) {
          const updated = { ...item, [field]: value };
          if (field === 'quantity' || field === 'unitPrice') {
            // Ensure we always have numeric values
            const qty = Number(updated.quantity) || 0;
            const price = Number(updated.unitPrice) || 0;
            updated.total = qty * price;
          }
          return updated;
        }
        return item;
      }),
    }));
  };

  const removeItem = (id: number) => {
    setInvoiceData((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.id !== id),
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  // Print and download share the same behavior for now – can be extended later
  const handleDownload = () => {
    window.print();
  };

  const handleWhatsAppShare = () => {
    const phoneNumber = '2348145540554';
    let message = `*INVOICE REQUEST*\n\n`;
    message += `Invoice #: ${invoiceData.invoiceNumber}\n`;
    message += `Date: ${new Date(invoiceData.date).toLocaleDateString()}\n\n`;
    message += `*Customer Details:*\n`;
    message += `Name: ${invoiceData.customerName}\n`;
    message += `Email: ${invoiceData.customerEmail}\n`;
    message += `Phone: ${invoiceData.customerPhone}\n`;
    message += `Address: ${invoiceData.customerAddress}\n\n`;
    message += `*Items:*\n`;
    invoiceData.items.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `   Model: ${item.model}\n`;
      message += `   Qty: ${item.quantity} × ₦${item.unitPrice.toLocaleString()} = ₦${item.total.toLocaleString()}\n\n`;
    });
    message += `Subtotal: ₦${calculateSubtotal().toLocaleString()}\n`;
    message += `VAT (7.5%): ₦${calculateVAT().toLocaleString()}\n`;
    message += `*Total: ₦${calculateTotal().toLocaleString()}*\n\n`;
    if (invoiceData.notes) {
      message += `Notes: ${invoiceData.notes}\n\n`;
    }
    message += `Please generate official invoice for this order.`;

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <>
      <Header />
      <main className="pt-[140px] md:pt-[148px] min-h-screen bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-6 md:py-12">
          {/* Header Actions */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 print:hidden">
            <div>
              <h1 className="text-3xl font-bold text-[#2c2c2c] mb-2">
                Generate Invoice
              </h1>
              <p className="text-gray-600">
                Create professional invoices with automatic 7.5% VAT
                calculation
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleWhatsAppShare}
                className="px-4 py-2 bg-[#25d366] text-white rounded-lg text-sm font-medium hover:bg-[#20ba5a] transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2"
              >
                <i className="ri-whatsapp-line"></i>
                Send via WhatsApp
              </button>
              <button
                onClick={handlePrint}
                className="px-4 py-2 bg-[#d32f2f] text-white rounded-lg text-sm font-medium hover:bg-[#b71c1c] transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2"
              >
                <i className="ri-printer-line"></i>
                Print / Download
              </button>
            </div>
          </div>

          {/* Invoice Form */}
          <div ref={invoiceRef} className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            {/* Invoice Header */}
            <div className="flex flex-col md:flex-row justify-between items-start mb-12 pb-8 border-b-2 border-gray-200">
              <div>
                <img
                  src="https://static.readdy.ai/image/f38dbee0b97d493b71475a98132a7b29/cdead8b21311288f8824758382c8b9f1.jpeg"
                  alt="FireAlarm.ng"
                  className="h-16 mb-4"
                />
                <div className="text-sm text-gray-600">
                  <p className="font-medium text-[#2c2c2c]">FireAlarm.ng</p>
                  <p>Fire Safety Equipment Supplier</p>
                  <p>Abuja, Nigeria</p>
                  <p>+234 814 554 0554</p>
                  <p>info@firealarm.ng</p>
                </div>
              </div>
              <div className="text-right mt-6 md:mt-0">
                <h2 className="text-4xl font-bold text-[#d32f2f] mb-4">
                  INVOICE
                </h2>
                <div className="text-sm space-y-1">
                  <div className="flex justify-end gap-2">
                    <span className="font-medium">Invoice #:</span>
                    <input
                      type="text"
                      value={invoiceData.invoiceNumber}
                      onChange={(e) =>
                        setInvoiceData((prev) => ({
                          ...prev,
                          invoiceNumber: e.target.value,
                        }))
                      }
                      className="border-b border-gray-300 text-right focus:outline-none focus:border-[#d32f2f] print:border-0"
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <span className="font-medium">Date:</span>
                    <input
                      type="date"
                      value={invoiceData.date}
                      onChange={(e) =>
                        setInvoiceData((prev) => ({
                          ...prev,
                          date: e.target.value,
                        }))
                      }
                      className="border-b border-gray-300 text-right focus:outline-none focus:border-[#d32f2f] print:border-0"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Details */}
            <div className="mb-12">
              <h3 className="text-lg font-bold text-[#2c2c2c] mb-4">
                Bill To:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Customer Name
                  </label>
                  <input
                    type="text"
                    value={invoiceData.customerName}
                    onChange={(e) =>
                      setInvoiceData((prev) => ({
                        ...prev,
                        customerName: e.target.value,
                      }))
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d32f2f] print:border-0 print:px-0"
                    placeholder="Enter customer name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={invoiceData.customerEmail}
                    onChange={(e) =>
                      setInvoiceData((prev) => ({
                        ...prev,
                        customerEmail: e.target.value,
                      }))
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d32f2f] print:border-0 print:px-0"
                    placeholder="customer@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={invoiceData.customerPhone}
                    onChange={(e) =>
                      setInvoiceData((prev) => ({
                        ...prev,
                        customerPhone: e.target.value,
                      }))
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d32f2f] print:border-0 print:px-0"
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    value={invoiceData.customerAddress}
                    onChange={(e) =>
                      setInvoiceData((prev) => ({
                        ...prev,
                        customerAddress: e.target.value,
                      }))
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d32f2f] print:border-0 print:px-0"
                    placeholder="Customer address"
                  />
                </div>
              </div>
            </div>

            {/* Items Table */}
            <div className="mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-3 px-2 text-sm font-bold text-[#2c2c2c]">
                        Item
                      </th>
                      <th className="text-left py-3 px-2 text-sm font-bold text-[#2c2c2c]">
                        Model
                      </th>
                      <th className="text-center py-3 px-2 text-sm font-bold text-[#2c2c2c]">
                        Qty
                      </th>
                      <th className="text-right py-3 px-2 text-sm font-bold text-[#2c2c2c]">
                        Unit Price
                      </th>
                      <th className="text-right py-3 px-2 text-sm font-bold text-[#2c2c2c]">
                        Total
                      </th>
                      <th className="w-10 print:hidden"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoiceData.items.map((item) => (
                      <tr key={item.id} className="border-b border-gray-200">
                        <td className="py-3 px-2">
                          <input
                            type="text"
                            value={item.name}
                            onChange={(e) =>
                              updateItem(item.id, 'name', e.target.value)
                            }
                            className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-[#d32f2f] text-sm print:border-0 print:px-0"
                            placeholder="Product name"
                          />
                        </td>
                        <td className="py-3 px-2">
                          <input
                            type="text"
                            value={item.model}
                            onChange={(e) =>
                              updateItem(item.id, 'model', e.target.value)
                            }
                            className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-[#d32f2f] text-sm print:border-0 print:px-0"
                            placeholder="Model"
                          />
                        </td>
                        <td className="py-3 px-2">
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) =>
                              updateItem(
                                item.id,
                                'quantity',
                                parseInt(e.target.value) || 0
                              )
                            }
                            className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-[#d32f2f] text-sm text-center print:border-0 print:px-0"
                            min="1"
                          />
                        </td>
                        <td className="py-3 px-2">
                          <input
                            type="number"
                            value={item.unitPrice}
                            onChange={(e) =>
                              updateItem(
                                item.id,
                                'unitPrice',
                                parseFloat(e.target.value) || 0
                              )
                            }
                            className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-[#d32f2f] text-sm text-right print:border-0 print:px-0"
                            min="0"
                          />
                        </td>
                        <td className="py-3 px-2 text-right font-medium">
                          ₦{item.total.toLocaleString()}
                        </td>
                        <td className="py-3 px-2 print:hidden">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-[#d32f2f] hover:text-[#b71c1c] cursor-pointer"
                          >
                            <i className="ri-delete-bin-line"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <button
                onClick={addItem}
                className="mt-4 px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-sm font-medium text-gray-600 hover:border-[#d32f2f] hover:text-[#d32f2f] transition-colors cursor-pointer whitespace-nowrap print:hidden"
              >
                + Add Item
              </button>
            </div>

            {/* Totals */}
            <div className="flex justify-end mb-8">
              <div className="w-full md:w-80">
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-700">Subtotal:</span>
                    <span className="text-lg font-medium">
                      ₦{calculateSubtotal().toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-700">VAT (7.5%):</span>
                    <span className="text-lg font-medium">
                      ₦{calculateVAT().toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t-2 border-gray-300">
                    <span className="text-xl font-bold text-[#2c2c2c]">
                      Total:
                    </span>
                    <span className="text-2xl font-bold text-[#d32f2f]">
                      ₦{calculateTotal().toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Notes / Terms
              </label>
              <textarea
                value={invoiceData.notes}
                onChange={(e) =>
                  setInvoiceData((prev) => ({
                    ...prev,
                    notes: e.target.value,
                  }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d32f2f] text-sm print:border-0 print:px-0"
                rows={3}
                placeholder="Payment terms, delivery notes, or other information..."
              ></textarea>
            </div>

            {/* Footer */}
            <div className="pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
              <p className="mb-2">Thank you for your business!</p>
              <p>
                For inquiries, contact us at +234 814 554 0554 or
                info@firealarm.ng
              </p>
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-8 bg-white rounded-lg border border-gray-200 p-6 print:hidden">
            <h3 className="text-lg font-bold text-[#2c2c2c] mb-4">
              How to Use
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="w-10 h-10 bg-[#d32f2f] text-white rounded-full flex items-center justify-center mb-3">
                  <i className="ri-edit-line"></i>
                </div>
                <h4 className="font-bold text-[#2c2c2c] mb-2">1. Fill Details</h4>
                <p className="text-sm text-gray-600">
                  Enter customer information and add items with quantities and
                  prices
                </p>
              </div>
              <div>
                <div className="w-10 h-10 bg-[#d32f2f] text-white rounded-full flex items-center justify-center mb-3">
                  <i className="ri-calculator-line"></i>
                </div>
                <h4 className="font-bold text-[#2c2c2c] mb-2">
                  2. Auto Calculate
                </h4>
                <p className="text-sm text-gray-600">
                  VAT (7.5%) is automatically calculated and added to the total
                </p>
              </div>
              <div>
                <div className="w-10 h-10 bg-[#d32f2f] text-white rounded-full flex items-center justify-center mb-3">
                  <i className="ri-share-line"></i>
                </div>
                <h4 className="font-bold text-[#2c2c2c] mb-2">
                  3. Share or Print
                </h4>
                <p className="text-sm text-gray-600">
                  Send via WhatsApp or print/download as PDF
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Print Styles */}
      <style>{`
        @media print {
          body * { visibility: hidden; }
          .print\\:hidden { display: none !important; }
          #root, #root * { visibility: visible; }
          main { padding-top: 0 !important; }
          input, textarea { border: none !important; padding: 0 !important; }
        }
      `}</style>
    </>
  );
}
