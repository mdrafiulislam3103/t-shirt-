import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  Truck, 
  RefreshCcw, 
  Camera, 
  ChevronDown, 
  Star, 
  MessageCircle, 
  Menu, 
  X,
  Phone,
  ShieldCheck,
  Award
} from 'lucide-react';

// --- Types ---
interface Product {
  id: string;
  name: string;
  color: string;
  price: string;
  stock: string;
  image: string;
}

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

interface OrderData {
  fullName: string;
  phone: string;
  address: string;
  color: string;
  size: string;
}

// --- Data ---
const PRODUCTS: Product[] = [
  { id: '1', name: 'Original White', color: 'White', price: '৳১২৫০', stock: 'In Stock', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=400' },
  { id: '2', name: 'Classic Sky Blue', color: 'Sky Blue', price: '৳১২৫০', stock: 'Limited Stock', image: 'https://images.unsplash.com/photo-1598033129183-c4f50c717658?auto=format&fit=crop&q=80&w=400' },
  { id: '3', name: 'Royal Navy', color: 'Navy', price: '৳১২৫০', stock: 'In Stock', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=400' },
  { id: '4', name: 'Gentle Pink', color: 'Pink', price: '৳১২৫০', stock: 'In Stock', image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&q=80&w=400' },
];

const REVIEWS: Review[] = [
  { id: 1, name: 'Ariful Islam', rating: 5, comment: 'শার্টের কাপড় অনেক সফট এবং ফিটিং টা সত্তি জাস্ট ওয়াও। ডেলিভারি ও দ্রুত পেয়েছি।', date: '২ দিন আগে' },
  { id: 2, name: 'Tanvir Ahmed', rating: 5, comment: 'আগে অনেক জায়গা থেকে কিনেছি কিন্তু এই কোয়ালিটি পাইনি। ১০০% পিওর কটন।', date: '৫ দিন আগে' },
  { id: 3, name: 'Mehedi Hasan', rating: 5, comment: 'রালফ লরেনের লগো টা অনেক নিখুঁত। ধন্যবাদ সেলারকে।', date: '১ সপ্তাহ আগে' },
];

const FAQS = [
  { q: "ডেলিভারি চার্জ কত?", a: "ঢাকার ভিতরে ৬০ টাকা এবং ঢাকার বাইরে ১২০ টাকা।" },
  { q: "সাইজ না মিললে কি পরিবর্তন করা যাবে?", a: "জি অবশ্যই! যেকোনো সমস্যার জন্য ৩ দিনের মধ্যে এক্সচেঞ্জ করার সুবিধা আছে।" },
  { q: "এটি কি অরিজিনাল শার্ট?", a: "এটি প্রিমিয়াম কোয়ালিটি মাস্টার কপি, যা অরিজিনাল কাপড়ের মতোই ১০০% কটন।" }
];

export default function App() {
  const [orderForm, setOrderForm] = useState<OrderData>({
    fullName: '',
    phone: '',
    address: '',
    color: '',
    size: ''
  });
  const [isOrdered, setIsOrdered] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const orderSectionRef = useRef<HTMLDivElement>(null);

  const scrollToOrder = () => {
    orderSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New Order Received:", orderForm);
    setIsOrdered(true);
    // In a real app, you'd send this to a backend/spreadsheet
  };

  return (
    <div className="min-h-screen">
      {/* 1. TOP BANNER */}
      <div className="bg-black text-white py-2 text-center text-sm font-medium sticky top-0 z-50">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          সারা বাংলাদেশে ক্যাশ অন ডেলিভারি সুবিধা
        </motion.p>
      </div>

      {/* 2. HERO SECTION */}
      <section className="relative bg-navy overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-white text-center lg:text-left mb-12 lg:mb-0">
            <motion.h1 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              প্রিমিয়াম কোয়ালিটি <span className="text-gold">রালফ লরেন শার্ট</span>
            </motion.h1>
            <motion.p 
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg lg:text-xl text-gray-200 mb-8 max-w-xl"
            >
              আসল কটন এবং ক্লাসিক ফিটিং। এক্সক্লুসিভ কালেকশন এখন সীমিত সময়ের জন্য।
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToOrder}
              className="bg-gold hover:bg-gold-dark text-navy font-bold py-4 px-10 rounded-full text-lg shadow-xl flex items-center gap-2 mx-auto lg:mx-0"
            >
              অর্ডার করতে নিচে যান <ChevronDown size={20} />
            </motion.button>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 border-2 border-gold/30 rounded-lg animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1598033129183-c4f50c717658?auto=format&fit=crop&q=80&w=600" 
                alt="Ralph Lauren Shirt" 
                className="rounded-lg shadow-2xl w-full max-w-md object-cover border-4 border-white/10"
              />
              <div className="absolute bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg text-navy font-bold flex items-center gap-2">
                <Award className="text-gold" /> Best Quality 2024
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <TrustCard icon={<Award size={32} />} title="100% Cotton Fabric" />
            <TrustCard icon={<ShieldCheck size={32} />} title="Authentic Logo & Fitting" />
            <TrustCard icon={<RefreshCcw size={32} />} title="Easy Exchange Policy" />
            <TrustCard icon={<Camera size={32} />} title="Real Product Pictures" />
          </div>
        </div>
      </section>

      {/* 4. GALLERY */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-navy">আমাদের কালার কালেকশন</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((product) => (
              <ProductCard 
                key={product.id} 
                name={product.name}
                color={product.color}
                price={product.price}
                stock={product.stock}
                image={product.image}
                onOrder={scrollToOrder} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. SIZE CHART */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-4 text-navy">আপনার সাইজ বেছে নিন</h2>
          <p className="text-center text-gray-600 mb-8">সঠিক সাইজ বেছে নিতে আমাদের চার্টটি দেখুন।</p>
          <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-100">
            <table className="w-full text-left">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="p-4">Size</th>
                  <th className="p-4">Chest (Inches)</th>
                  <th className="p-4">Length (Inches)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-bold">M</td>
                  <td className="p-4">38 - 39</td>
                  <td className="p-4">27.5</td>
                </tr>
                <tr className="bg-gray-50/50 hover:bg-gray-50">
                  <td className="p-4 font-bold">L</td>
                  <td className="p-4">40 - 41</td>
                  <td className="p-4">28.5</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-bold">XL</td>
                  <td className="p-4">42 - 43</td>
                  <td className="p-4">29</td>
                </tr>
                <tr className="bg-gray-50/50 hover:bg-gray-50">
                  <td className="p-4 font-bold">XXL</td>
                  <td className="p-4">44 - 45</td>
                  <td className="p-4">30</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. REVIEWS */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">আমাদের কাস্টমাররা যা বলছেন</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <motion.div 
                key={review.id}
                whileHover={{ y: -5 }}
                className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
              >
                <div className="flex gap-1 mb-4 text-gold">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 italic mb-6">"{review.comment}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-navy font-bold">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold">{review.name}</h4>
                    <p className="text-xs text-gray-400">{review.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-navy">সচরাচর জিজ্ঞাসা (FAQ)</h2>
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div key={index} className="border border-gray-100 rounded-lg overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full flex justify-between items-center p-5 text-left font-semibold text-navy hover:bg-gray-50 transition-colors"
                >
                  {faq.q}
                  <ChevronDown className={`transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-5 pb-5 text-gray-600"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. ORDER BOX */}
      <section ref={orderSectionRef} className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-navy p-10 text-white">
              <h2 className="text-3xl font-bold mb-6">অর্ডার কনফার্ম করুন</h2>
              <p className="text-gray-300 mb-8">নিচের ফর্মটি পূরণ করে অর্ডারটি কনফার্ম করুন। আমাদের প্রতিনিধি কল করে কনফার্ম করবেন।</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                    <Truck size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold">Fast Delivery</h4>
                    <p className="text-sm text-gray-400">২৪-৭২ ঘন্টার মধ্যে ডেলিভারি</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold">Secure Order</h4>
                    <p className="text-sm text-gray-400">ক্যাশ অন ডেলিভারি সুবিধা</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 text-center">
                <p className="text-gold text-2xl font-bold">৳১২৫০</p>
                <p className="text-xs text-gray-400">অফার মূল্য সীমিত সময়ের জন্য</p>
              </div>
            </div>

            <div className="md:w-3/5 p-10">
              {isOrdered ? (
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-2">অর্ডার সফল হয়েছে!</h3>
                  <p className="text-gray-600 mb-8">আমাদের টিমের একজন খুব শীঘ্রই আপনাকে কল করবেন।</p>
                  <button 
                    onClick={() => setIsOrdered(false)}
                    className="text-navy font-semibold hover:underline"
                  >
                    আরেকটি অর্ডার করুন
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleOrder} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">আপনার নাম *</label>
                    <input 
                      required
                      type="text" 
                      placeholder="যেমন: আরফুল ইসলাম"
                      className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-gold outline-none"
                      onChange={(e) => setOrderForm({...orderForm, fullName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">মোবাইল নাম্বার *</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="০১৭XXXXXXXX"
                      className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-gold outline-none"
                      onChange={(e) => setOrderForm({...orderForm, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">আপনার পূর্ণ ঠিকানা *</label>
                    <textarea 
                      required
                      placeholder="বাড়ি নং, রোড নং, থানা/জেলা"
                      rows={2}
                      className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-gold outline-none"
                      onChange={(e) => setOrderForm({...orderForm, address: e.target.value})}
                    ></textarea>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">কালার বেছে নিন</label>
                      <select 
                        required
                        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold outline-none"
                        onChange={(e) => setOrderForm({...orderForm, color: e.target.value})}
                      >
                        <option value="">সিলেক্ট কালার</option>
                        <option value="White">White</option>
                        <option value="Sky Blue">Sky Blue</option>
                        <option value="Navy">Navy</option>
                        <option value="Pink">Pink</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">সাইজ বেছে নিন</label>
                      <select 
                        required
                        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold outline-none"
                        onChange={(e) => setOrderForm({...orderForm, size: e.target.value})}
                      >
                        <option value="">সিলেক্ট সাইজ</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                      </select>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gold hover:bg-gold-dark text-navy font-bold py-4 rounded-lg shadow-lg text-lg flex items-center justify-center gap-2 mt-4"
                  >
                    কনফার্ম অর্ডার করুন <CheckCircle2 size={24} />
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* WHATSAPP BUTTON */}
      <motion.a
        href="https://wa.me/8801700000000" // Mock number
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
      >
        <MessageCircle size={32} />
      </motion.a>

      {/* FOOTER */}
      <footer className="bg-navy text-white/50 py-8 text-center text-sm">
        <div className="container mx-auto px-4">
          <p>© ২০২৪ Elite Polo BD - সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </footer>
    </div>
  );
}

// --- Helper Components ---

function TrustCard({ icon, title }: { icon: React.ReactNode, title: string }) {
  return (
    <div className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-2xl hover:shadow-xl transition-shadow bg-gray-50/50">
      <div className="text-gold mb-4 p-3 bg-white rounded-full shadow-sm">
        {icon}
      </div>
      <h3 className="font-bold text-navy leading-tight">{title}</h3>
    </div>
  );
}

function ProductCard({ 
  name, 
  color, 
  price, 
  stock, 
  image, 
  onOrder 
}: { 
  key?: React.Key,
  name: string, 
  color: string, 
  price: string, 
  stock: string, 
  image: string, 
  onOrder: () => void 
}) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl overflow-hidden shadow-md group border border-gray-100"
    >
      <div className="relative overflow-hidden aspect-[4/5]">
        <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute top-4 left-4 bg-navy/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md">
          {stock}
        </div>
        <div className="absolute top-4 right-4 bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          -১০% ছাড়
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-navy mb-1">{name}</h3>
        <p className="text-gray-500 text-sm mb-4">Color: {color}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-navy">{price}</span>
          <button 
            onClick={onOrder}
            className="text-xs bg-navy text-white px-4 py-2 rounded-full font-bold hover:bg-navy/80 transition-colors"
          >
            অর্ডার করুন
          </button>
        </div>
      </div>
    </motion.div>
  );
}
