'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, Store, Package, FileText, 
  CircleDollarSign, Hash, CheckCircle2, 
  X, Loader2, Sparkles, AlertCircle 
} from 'lucide-react';

export default function NuevoProductoPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stock: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock)
      });

      // Simulate network delay for premium feel if it's too fast
      await new Promise(r => setTimeout(r, 600));

      router.push('/productos');
    } catch (error) {
      setError('Ocurrió un error al intentar crear el producto. Por favor, revisa tu conexión e inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-gray-50 relative overflow-hidden">

      {/* Decorative Premium Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-color4/10 blur-[120px] rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-color1/10 blur-[100px] rounded-tr-full" />
      </div>

      {/* Minimal Header */}
      <header className="relative z-10 py-5 px-6 md:px-12 bg-white/70 backdrop-blur-xl border-b border-gray-100 shadow-sm flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
            <Store size={20} strokeWidth={2.5} />
          </div>
          <span className="text-xl font-black text-color1 tracking-tight">BodeApp</span>
        </Link>
        <Link 
          href="/productos"
          className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold text-gray-500 hover:text-color1 hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Volver al Inventario</span>
        </Link>
      </header>

      {/* Form Container */}
      <section className="relative z-10 flex-1 flex flex-col items-center justify-center py-12 px-6">
        
        <div className="w-full max-w-xl animate-fadeIn">
          
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-lg text-color2 mb-6">
              <Sparkles size={32} strokeWidth={2} />
            </div>
            <h2 className="text-4xl font-black text-color1 mb-2 tracking-tight">Nuevo Producto</h2>
            <p className="text-gray-500 font-medium">Ingresa los detalles para registrar un nuevo artículo en tu inventario.</p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_20px_60px_rgba(43,12,59,0.06)] border border-gray-100 relative overflow-hidden">
            
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1.5 gradient-primary" />

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Product Name */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-color1">
                  Nombre del Producto <span className="text-rose-500">*</span>
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-color2 transition-colors">
                    <Package size={20} />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-transparent focus:bg-white focus:border-color2 rounded-xl text-color1 font-medium transition-all outline-none"
                    placeholder="Ej. Teclado Mecánico RGB"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-color1">
                  Descripción Corta
                </label>
                <div className="relative group">
                  <div className="absolute top-3.5 left-0 pl-4 flex items-start pointer-events-none text-gray-400 group-focus-within:text-color2 transition-colors">
                    <FileText size={20} />
                  </div>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={3}
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-transparent focus:bg-white focus:border-color2 rounded-xl text-color1 font-medium transition-all outline-none resize-none"
                    placeholder="Detalles sobre el producto..."
                  />
                </div>
              </div>

              {/* Price & Stock Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Price */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-color1">
                    Precio (S/) <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-color2 transition-colors">
                      <CircleDollarSign size={20} />
                    </div>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      required
                      step="0.01"
                      min="0"
                      className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-transparent focus:bg-white focus:border-color2 rounded-xl text-color1 font-medium transition-all outline-none"
                      placeholder="0.00"
                    />
                  </div>
                </div>

                {/* Stock */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-color1">
                    Unidades (Stock) <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-color2 transition-colors">
                      <Hash size={20} />
                    </div>
                    <input
                      type="number"
                      name="stock"
                      value={formData.stock}
                      onChange={handleChange}
                      required
                      min="0"
                      className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-transparent focus:bg-white focus:border-color2 rounded-xl text-color1 font-medium transition-all outline-none"
                      placeholder="0"
                    />
                  </div>
                </div>

              </div>

              {/* Error Message */}
              {error && (
                <div className="flex items-start gap-3 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 animate-fadeIn">
                  <AlertCircle className="shrink-0 mt-0.5" size={20} />
                  <p className="text-sm font-medium">{error}</p>
                  <button type="button" onClick={() => setError('')} className="ml-auto text-rose-400 hover:text-rose-800">
                    <X size={20} />
                  </button>
                </div>
              )}

              {/* Actions */}
              <div className="pt-6 mt-6 border-t border-gray-100 flex flex-col-reverse md:flex-row gap-4">
                <Link
                  href="/productos"
                  className="flex-1 px-6 py-4 rounded-xl font-bold text-gray-500 bg-gray-50 hover:bg-gray-100 hover:text-color1 transition-colors text-center"
                >
                  Cancelar
                </Link>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-[2] px-6 py-4 rounded-xl font-bold text-white gradient-primary hover:shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2 group"
                >
                  {loading ? (
                    <>
                      <Loader2 size={22} className="animate-spin" />
                      Guardando...
                    </>
                  ) : (
                    <>
                      <CheckCircle2 size={22} className="group-hover:scale-110 transition-transform" />
                      Confirmar y Guardar
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
          
        </div>
      </section>
    </main>
  );
}
