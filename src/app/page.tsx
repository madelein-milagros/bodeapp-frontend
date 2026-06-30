import Link from 'next/link';
import { PackageSearch, PlusCircle, Store, ShieldCheck, Cloud, Clock, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen gradient-primary relative overflow-hidden flex flex-col">
      {/* Premium background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[60vw] h-[60vw] rounded-full opacity-[0.15] blur-[120px] bg-color4 mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-[40%] -left-[20%] w-[50vw] h-[50vw] rounded-full opacity-[0.12] blur-[140px] bg-color3 mix-blend-screen animate-pulse" style={{ animationDuration: '12s' }} />
      </div>

      {/* Header */}
      <header className="w-full py-6 px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-8 py-4 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white text-color1 rounded-full flex items-center justify-center shadow-lg">
              <Store size={20} strokeWidth={2.5} />
            </div>
            <h1 className="text-2xl font-black tracking-tight text-white drop-shadow-md">
              Bode<span className="text-color4">App</span>
            </h1>
          </div>
          <nav className="hidden md:flex gap-8 text-white/90 font-medium">
            <span className="hover:text-white cursor-pointer transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-color4 hover:after:w-full after:transition-all after:duration-300">Inicio</span>
            <Link href="/productos" className="hover:text-white cursor-pointer transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-color4 hover:after:w-full after:transition-all after:duration-300">Productos</Link>
            <span className="hover:text-white cursor-pointer transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-color4 hover:after:w-full after:transition-all after:duration-300">Acerca de</span>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center max-w-7xl mx-auto px-6 md:px-12 py-16 relative z-10 w-full">
        <div className="text-center mb-20 animate-fadeIn max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-semibold mb-8 backdrop-blur-md shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-color5 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-color5"></span>
            </span>
            Tu inventario, más inteligente
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1.1] drop-shadow-xl tracking-tight">
            Sistema de <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-color4 via-color5 to-white filter drop-shadow-sm">
              Inventario
            </span>
          </h2>
          <p className="text-lg md:text-2xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            Gestiona tu bodega de manera eficiente, rápida y con un diseño que te encantará usar todos los días.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
          {/* Card 1 */}
          <Link 
            href="/productos"
            className="group relative block bg-white/95 backdrop-blur-2xl border border-white/40 rounded-[2rem] p-10 shadow-custom hover-lift overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-color4/20 to-transparent rounded-bl-full opacity-50 group-hover:scale-110 transition-transform duration-700" />
            
            <div className="w-16 h-16 gradient-secondary rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-color2/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
              <PackageSearch className="text-white" size={32} strokeWidth={2} />
            </div>
            
            <h3 className="text-3xl font-black text-color1 mb-4 tracking-tight">
              Ver Productos
            </h3>
            
            <p className="text-gray-500 text-lg mb-8 leading-relaxed font-medium">
              Consulta el inventario completo de tu bodega en tiempo real con estadísticas detalladas.
            </p>
            
            <div className="flex items-center text-color3 font-bold group-hover:text-color1 transition-colors text-lg">
              Explorar Inventario 
              <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={20} />
            </div>
          </Link>

          {/* Card 2 */}
          <Link 
            href="/productos/nuevo"
            className="group relative block bg-white/95 backdrop-blur-2xl border border-white/40 rounded-[2rem] p-10 shadow-custom hover-lift overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-color2/10 to-transparent rounded-br-full opacity-50 group-hover:scale-110 transition-transform duration-700" />
            
            <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-color1/30 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
              <PlusCircle className="text-white" size={32} strokeWidth={2} />
            </div>
            
            <h3 className="text-3xl font-black text-color1 mb-4 tracking-tight">
              Nuevo Producto
            </h3>
            
            <p className="text-gray-500 text-lg mb-8 leading-relaxed font-medium">
              Registra nuevos artículos en segundos con nuestra interfaz optimizada, fluida y rápida.
            </p>
            
            <div className="flex items-center text-color3 font-bold group-hover:text-color1 transition-colors text-lg">
              Agregar Artículo 
              <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={20} />
            </div>
          </Link>
        </div>

        {/* Premium Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto pb-12">
          <div className="bg-black/10 backdrop-blur-xl border border-white/10 rounded-[1.5rem] p-8 flex items-center gap-6 hover:bg-black/20 transition-colors">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
              <Cloud size={28} />
            </div>
            <div>
              <div className="text-3xl font-black text-white mb-1 drop-shadow-sm">100%</div>
              <div className="text-color5 font-semibold tracking-wide text-sm">En la Nube</div>
            </div>
          </div>
          
          <div className="bg-black/10 backdrop-blur-xl border border-white/10 rounded-[1.5rem] p-8 flex items-center gap-6 hover:bg-black/20 transition-colors">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
              <Clock size={28} />
            </div>
            <div>
              <div className="text-3xl font-black text-white mb-1 drop-shadow-sm">24/7</div>
              <div className="text-color5 font-semibold tracking-wide text-sm">Disponibilidad</div>
            </div>
          </div>
          
          <div className="bg-black/10 backdrop-blur-xl border border-white/10 rounded-[1.5rem] p-8 flex items-center gap-6 hover:bg-black/20 transition-colors">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
              <ShieldCheck size={28} />
            </div>
            <div>
              <div className="text-3xl font-black text-white mb-1 drop-shadow-sm">Seguro</div>
              <div className="text-color5 font-semibold tracking-wide text-sm">Datos Protegidos</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}