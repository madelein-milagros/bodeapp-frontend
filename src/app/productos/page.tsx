'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { 
  ArrowLeft, Package, Search, Tag, 
  CircleDollarSign, AlertCircle, Inbox, 
  Plus, Store
} from 'lucide-react';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
}

export default function ProductosPage() {
  const [productos, setProductos] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
      setProductos(response.data);
    } catch (error) {
      console.error('Error al cargar productos:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = productos.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <main className="min-h-screen gradient-primary flex flex-col items-center justify-center">
        <div className="w-20 h-20 relative mb-6">
          <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
        <p className="text-white text-2xl font-semibold tracking-wide animate-pulse">Cargando inventario...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Background Decorative */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full opacity-5 blur-[100px] bg-color1 mix-blend-multiply" />
        <div className="absolute top-[60%] -left-[10%] w-[40vw] h-[40vw] rounded-full opacity-5 blur-[120px] bg-color2 mix-blend-multiply" />
      </div>

      {/* Header */}
      <header className="gradient-primary pt-6 pb-20 px-6 md:px-12 relative z-10 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md text-color1 group-hover:scale-105 transition-transform duration-300">
              <Store size={24} strokeWidth={2.5} />
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight">BodeApp</h1>
          </Link>
          <Link 
            href="/"
            className="flex items-center gap-2 px-6 py-2.5 bg-white/10 backdrop-blur-md text-white font-medium rounded-full border border-white/20 hover:bg-white/20 transition-all shadow-sm"
          >
            <ArrowLeft size={18} />
            <span>Volver</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 -mt-10 relative z-20 pb-20">
        
        {/* Controls Bar */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 md:p-6 shadow-card border border-white mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 gradient-secondary rounded-xl text-white shadow-md">
              <Package size={28} />
            </div>
            <div>
              <h2 className="text-3xl font-black text-color1 tracking-tight">
                Inventario
              </h2>
              <p className="text-color3 font-medium text-sm">
                {productos.length} {productos.length === 1 ? 'producto registrado' : 'productos registrados'}
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 flex-1 md:max-w-xl md:ml-auto">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <Search size={20} />
              </div>
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-transparent focus:bg-white border-2 focus:border-color4 rounded-xl text-color1 font-medium transition-all shadow-inner outline-none ring-0"
              />
            </div>
            <Link 
              href="/productos/nuevo"
              className="flex items-center justify-center gap-2 px-6 py-3.5 gradient-primary text-white rounded-xl font-bold hover:-translate-y-1 hover:shadow-lg transition-all whitespace-nowrap"
            >
              <Plus size={20} strokeWidth={3} />
              Agregar Producto
            </Link>
          </div>
        </div>

        {productos.length === 0 ? (
          <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-16 text-center shadow-card border border-white max-w-2xl mx-auto mt-12 animate-fadeIn">
            <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
              <Inbox size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-3xl font-black text-color1 mb-3">
              Inventario Vacío
            </h3>
            <p className="text-gray-500 text-lg mb-8 max-w-md mx-auto">
              No hay productos registrados en este momento. Comienza agregando tu primer artículo.
            </p>
            <Link 
              href="/productos/nuevo"
              className="inline-flex items-center gap-2 px-8 py-4 gradient-secondary text-white rounded-full font-bold text-lg hover:shadow-[0_10px_30px_rgba(79,20,61,0.3)] hover:-translate-y-1 transition-all"
            >
              <Plus size={22} strokeWidth={3} />
              Agregar Primer Producto
            </Link>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <Search className="mx-auto text-gray-300 mb-4" size={48} />
            <h3 className="text-2xl font-bold text-color1 mb-2">Sin resultados</h3>
            <p className="text-gray-500">No encontramos productos que coincidan con "{searchTerm}"</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((producto, index) => (
              <div 
                key={producto._id} 
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 hover:border-color5/30 hover:-translate-y-1 transition-all duration-300 animate-fadeIn relative overflow-hidden"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Status Indicator Line */}
                <div className={`absolute top-0 left-0 w-full h-1.5 ${
                  producto.stock > 10 ? 'bg-emerald-400' : 
                  producto.stock > 0 ? 'bg-amber-400' : 'bg-rose-500'
                }`} />

                <div className="flex items-start justify-between mb-4 mt-2">
                  <div className="w-12 h-12 bg-gray-50 text-color2 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-color2 group-hover:text-white transition-all duration-300">
                    <Tag size={22} />
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5 ${
                    producto.stock > 10 ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 
                    producto.stock > 0 ? 'bg-amber-50 text-amber-700 border-amber-200' : 'bg-rose-50 text-rose-700 border-rose-200'
                  }`}>
                    {producto.stock <= 10 && <AlertCircle size={12} strokeWidth={3} />}
                    {producto.stock > 10 ? 'En Stock' : producto.stock > 0 ? 'Stock Bajo' : 'Agotado'}
                  </div>
                </div>

                <h3 className="text-xl font-black text-color1 mb-2 group-hover:text-color2 transition-colors line-clamp-1">
                  {producto.name}
                </h3>
                
                <p className="text-gray-500 text-sm mb-6 line-clamp-2 min-h-[2.5rem]">
                  {producto.description || "Sin descripción"}
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                  <div>
                    <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                      <CircleDollarSign size={14} /> Precio
                    </span>
                    <div className="text-2xl font-black text-color1">
                      <span className="text-sm font-semibold text-color4 mr-1">S/</span>
                      {producto.price.toFixed(2)}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="flex items-center justify-end gap-1 text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                      <Package size={14} /> Stock
                    </span>
                    <div className="text-2xl font-black text-color1">
                      {producto.stock} <span className="text-sm font-semibold text-gray-400 ml-1">unid.</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}