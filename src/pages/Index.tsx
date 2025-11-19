import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [cartCount, setCartCount] = useState(0);
  const [favCount, setFavCount] = useState(0);
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    { id: 'electronics', name: 'Электроника', icon: 'Laptop', color: 'from-purple-500 to-pink-500' },
    { id: 'fashion', name: 'Одежда', icon: 'Shirt', color: 'from-orange-500 to-red-500' },
    { id: 'home', name: 'Дом', icon: 'Home', color: 'from-blue-500 to-cyan-500' },
    { id: 'sports', name: 'Спорт', icon: 'Dumbbell', color: 'from-green-500 to-emerald-500' },
    { id: 'beauty', name: 'Красота', icon: 'Sparkles', color: 'from-pink-500 to-rose-500' },
    { id: 'books', name: 'Книги', icon: 'BookOpen', color: 'from-indigo-500 to-purple-500' },
  ];

  const products = [
    {
      id: 1,
      name: 'Беспроводные наушники Premium',
      price: 12990,
      oldPrice: 15990,
      rating: 4.8,
      reviews: 342,
      image: 'https://cdn.poehali.dev/projects/d4423e7e-a730-404f-b519-ce44235d09a3/files/71f28146-904d-453d-aad3-3cb9bbf87b00.jpg',
      discount: 19,
      category: 'electronics'
    },
    {
      id: 2,
      name: 'Кроссовки Designer Collection',
      price: 8490,
      oldPrice: 11990,
      rating: 4.9,
      reviews: 521,
      image: 'https://cdn.poehali.dev/projects/d4423e7e-a730-404f-b519-ce44235d09a3/files/3f33af8f-f557-43df-8445-5365f7ce7591.jpg',
      discount: 29,
      category: 'fashion'
    },
    {
      id: 3,
      name: 'Умные часы Fitness Pro',
      price: 15990,
      oldPrice: 19990,
      rating: 4.7,
      reviews: 289,
      image: 'https://cdn.poehali.dev/projects/d4423e7e-a730-404f-b519-ce44235d09a3/files/f3e89b12-6b0c-48f9-bfc8-b8a8260f3fb2.jpg',
      discount: 20,
      category: 'electronics'
    },
    {
      id: 4,
      name: 'Портативная колонка Sound',
      price: 4990,
      oldPrice: 6990,
      rating: 4.6,
      reviews: 412,
      image: 'https://cdn.poehali.dev/projects/d4423e7e-a730-404f-b519-ce44235d09a3/files/71f28146-904d-453d-aad3-3cb9bbf87b00.jpg',
      discount: 29,
      category: 'electronics'
    },
    {
      id: 5,
      name: 'Рюкзак городской Style',
      price: 3290,
      oldPrice: 4590,
      rating: 4.5,
      reviews: 198,
      image: 'https://cdn.poehali.dev/projects/d4423e7e-a730-404f-b519-ce44235d09a3/files/3f33af8f-f557-43df-8445-5365f7ce7591.jpg',
      discount: 28,
      category: 'fashion'
    },
    {
      id: 6,
      name: 'Фитнес-браслет Active',
      price: 2990,
      oldPrice: 4990,
      rating: 4.4,
      reviews: 567,
      image: 'https://cdn.poehali.dev/projects/d4423e7e-a730-404f-b519-ce44235d09a3/files/f3e89b12-6b0c-48f9-bfc8-b8a8260f3fb2.jpg',
      discount: 40,
      category: 'sports'
    },
  ];

  const filteredProducts = products.filter(p => 
    (selectedCategory === 'all' || p.category === selectedCategory) &&
    p.price >= priceRange[0] && p.price <= priceRange[1]
  );

  const addToCart = () => setCartCount(prev => prev + 1);
  const addToFavorites = () => setFavCount(prev => prev + 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Icon name="Zap" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                MarketPro
              </h1>
            </div>

            <div className="flex-1 max-w-2xl hidden md:block">
              <div className="relative">
                <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <Input 
                  placeholder="Найти товары, категории, бренды..." 
                  className="pl-10 pr-4 h-12 rounded-xl border-gray-300 focus:border-purple-500 transition-all"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative hover:bg-purple-100 rounded-xl transition-all">
                    <Icon name="Heart" size={24} />
                    {favCount > 0 && (
                      <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-gradient-to-r from-pink-500 to-rose-500 animate-scale-in">
                        {favCount}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Избранное</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 text-center text-gray-500">
                    <Icon name="Heart" size={48} className="mx-auto mb-4 text-gray-300" />
                    <p>Добавьте товары в избранное</p>
                  </div>
                </SheetContent>
              </Sheet>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative hover:bg-purple-100 rounded-xl transition-all">
                    <Icon name="ShoppingCart" size={24} />
                    {cartCount > 0 && (
                      <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 animate-scale-in">
                        {cartCount}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Корзина</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 text-center text-gray-500">
                    <Icon name="ShoppingCart" size={48} className="mx-auto mb-4 text-gray-300" />
                    <p>Ваша корзина пуста</p>
                  </div>
                </SheetContent>
              </Sheet>

              <Button variant="ghost" size="icon" className="hover:bg-purple-100 rounded-xl transition-all">
                <Icon name="User" size={24} />
              </Button>
            </div>
          </div>

          <div className="md:hidden mt-4">
            <div className="relative">
              <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <Input 
                placeholder="Поиск..." 
                className="pl-10 pr-4 h-12 rounded-xl"
              />
            </div>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white border-0 text-sm px-4 py-1">
              🔥 Скидки до 50% на всё
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Мега распродажа<br />зимней коллекции
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Тысячи товаров со скидками. Бесплатная доставка от 3000₽
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 h-14 px-8 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
                Смотреть каталог
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 h-14 px-8 rounded-xl font-semibold transition-all hover:scale-105">
                Топ товаров
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6">Популярные категории</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, index) => (
              <Card 
                key={cat.id}
                className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cat.color} mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon name={cat.icon as any} className="text-white" size={32} />
                  </div>
                  <p className="text-center font-semibold text-sm">{cat.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h3 className="text-3xl font-bold mb-2">Популярные товары</h3>
              <p className="text-gray-600">Найдено {filteredProducts.length} товаров</p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="rounded-xl gap-2">
                    <Icon name="SlidersHorizontal" size={18} />
                    Фильтры
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Фильтры товаров</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 space-y-6">
                    <div>
                      <label className="font-semibold mb-3 block">Категория</label>
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger className="rounded-xl">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Все категории</SelectItem>
                          {categories.map(cat => (
                            <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="font-semibold mb-3 block">
                        Цена: {priceRange[0]}₽ - {priceRange[1]}₽
                      </label>
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        min={0}
                        max={50000}
                        step={1000}
                        className="mt-2"
                      />
                    </div>

                    <Button className="w-full rounded-xl" onClick={() => {}}>
                      Применить фильтры
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[200px] rounded-xl">
                  <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">По популярности</SelectItem>
                  <SelectItem value="price-asc">Сначала дешевые</SelectItem>
                  <SelectItem value="price-desc">Сначала дорогие</SelectItem>
                  <SelectItem value="rating">По рейтингу</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-gray-100 to-gray-200">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.discount && (
                    <Badge className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 border-0 font-bold">
                      -{product.discount}%
                    </Badge>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 bg-white/90 hover:bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all"
                    onClick={addToFavorites}
                  >
                    <Icon name="Heart" size={20} />
                  </Button>
                </div>

                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <Icon name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                      <span className="font-semibold text-sm">{product.rating}</span>
                    </div>
                    <span className="text-gray-400 text-sm">({product.reviews})</span>
                  </div>

                  <h4 className="font-semibold mb-3 line-clamp-2 min-h-[48px]">
                    {product.name}
                  </h4>

                  <div className="flex items-end gap-2 mb-4">
                    <span className="text-2xl font-bold">{product.price.toLocaleString()}₽</span>
                    {product.oldPrice && (
                      <span className="text-gray-400 line-through text-sm mb-1">
                        {product.oldPrice.toLocaleString()}₽
                      </span>
                    )}
                  </div>

                  <Button 
                    className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all hover:shadow-lg"
                    onClick={addToCart}
                  >
                    <Icon name="ShoppingCart" className="mr-2" size={18} />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Icon name="Sparkles" className="mx-auto mb-4" size={48} />
          <h3 className="text-3xl font-bold mb-4">Получайте эксклюзивные предложения</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Подпишитесь на рассылку и получите промокод на скидку 15% на первый заказ
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              placeholder="Ваш email" 
              className="h-12 rounded-xl bg-white/20 border-white/30 text-white placeholder:text-white/60"
            />
            <Button className="bg-white text-purple-600 hover:bg-gray-100 h-12 px-8 rounded-xl font-semibold whitespace-nowrap">
              Подписаться
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">О компании</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Вакансии</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Покупателям</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Оплата</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Возврат</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Продавцам</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Стать продавцом</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Личный кабинет</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Документы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Чат поддержки</a></li>
                <li><a href="#" className="hover:text-white transition-colors">8 800 555-35-35</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 MarketPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
