import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useCartStore } from '@/lib/cartStore';

const Cart = () => {
  const navigate = useNavigate();
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } = useCartStore();
  
  const subtotal = getTotalPrice();
  const delivery = subtotal > 3000 ? 0 : 350;
  const discount = subtotal > 5000 ? Math.floor(subtotal * 0.05) : 0;
  const total = subtotal + delivery - discount;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => navigate('/')}
                  className="hover:bg-purple-100 rounded-xl"
                >
                  <Icon name="ArrowLeft" size={24} />
                </Button>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Icon name="Zap" className="text-white" size={24} />
                  </div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hidden sm:block">
                    MarketPro
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center animate-fade-in">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="ShoppingCart" size={64} className="text-purple-400" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Корзина пуста</h2>
            <p className="text-gray-600 mb-8">
              Добавьте товары из каталога, чтобы оформить заказ
            </p>
            <Button 
              size="lg"
              className="h-14 px-8 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600"
              onClick={() => navigate('/')}
            >
              <Icon name="ArrowLeft" className="mr-2" size={20} />
              В каталог
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => navigate('/')}
                className="hover:bg-purple-100 rounded-xl"
              >
                <Icon name="ArrowLeft" size={24} />
              </Button>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Icon name="Zap" className="text-white" size={24} />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hidden sm:block">
                  MarketPro
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-4xl font-bold">Корзина</h2>
          <Button 
            variant="ghost" 
            onClick={clearCart}
            className="text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            <Icon name="Trash2" className="mr-2" size={18} />
            Очистить корзину
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <Card 
                key={item.id}
                className="border-0 shadow-lg hover:shadow-xl transition-all animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div 
                      className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-gray-100 to-gray-200 cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => navigate(`/product/${item.id}`)}
                    >
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-4 mb-3">
                        <h3 
                          className="font-bold text-lg cursor-pointer hover:text-purple-600 transition-colors"
                          onClick={() => navigate(`/product/${item.id}`)}
                        >
                          {item.name}
                        </h3>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="hover:bg-red-50 hover:text-red-600 flex-shrink-0"
                        >
                          <Icon name="X" size={20} />
                        </Button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Button 
                            variant="outline" 
                            size="icon"
                            className="h-9 w-9 rounded-lg"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Icon name="Minus" size={16} />
                          </Button>
                          <span className="text-lg font-bold w-8 text-center">{item.quantity}</span>
                          <Button 
                            variant="outline" 
                            size="icon"
                            className="h-9 w-9 rounded-lg"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Icon name="Plus" size={16} />
                          </Button>
                        </div>

                        <div className="text-right">
                          <p className="text-2xl font-bold">
                            {(item.price * item.quantity).toLocaleString()}₽
                          </p>
                          <p className="text-sm text-gray-500">
                            {item.price.toLocaleString()}₽ за шт.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold mb-4">Итого</h3>

                  <div className="space-y-3">
                    <div className="flex justify-between text-lg">
                      <span className="text-gray-600">Товары ({items.reduce((sum, item) => sum + item.quantity, 0)})</span>
                      <span className="font-semibold">{subtotal.toLocaleString()}₽</span>
                    </div>

                    <div className="flex justify-between text-lg">
                      <span className="text-gray-600">Доставка</span>
                      <span className={`font-semibold ${delivery === 0 ? 'text-green-600' : ''}`}>
                        {delivery === 0 ? 'Бесплатно' : `${delivery}₽`}
                      </span>
                    </div>

                    {discount > 0 && (
                      <div className="flex justify-between text-lg text-green-600">
                        <span>Скидка 5%</span>
                        <span className="font-semibold">-{discount.toLocaleString()}₽</span>
                      </div>
                    )}

                    <Separator />

                    <div className="flex justify-between text-2xl font-bold">
                      <span>К оплате</span>
                      <span>{total.toLocaleString()}₽</span>
                    </div>
                  </div>

                  <Button 
                    size="lg"
                    className="w-full h-14 text-lg rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all"
                  >
                    Оформить заказ
                    <Icon name="ArrowRight" className="ml-2" size={20} />
                  </Button>
                </CardContent>
              </Card>

              {delivery > 0 && (
                <Card className="border-0 bg-blue-50 shadow-lg">
                  <CardContent className="p-4">
                    <div className="flex gap-3">
                      <Icon name="Truck" className="text-blue-600 flex-shrink-0" size={24} />
                      <div>
                        <p className="font-semibold text-blue-900 mb-1">
                          До бесплатной доставки
                        </p>
                        <p className="text-sm text-blue-700">
                          Добавьте товаров на {(3000 - subtotal).toLocaleString()}₽
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {subtotal > 5000 && (
                <Card className="border-0 bg-green-50 shadow-lg">
                  <CardContent className="p-4">
                    <div className="flex gap-3">
                      <Icon name="Gift" className="text-green-600 flex-shrink-0" size={24} />
                      <div>
                        <p className="font-semibold text-green-900 mb-1">
                          Скидка активирована!
                        </p>
                        <p className="text-sm text-green-700">
                          Вы получили скидку 5% на заказ
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">Промокод</h4>
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Введите промокод"
                      className="rounded-xl"
                    />
                    <Button variant="outline" className="rounded-xl">
                      Применить
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Icon name="BadgeCheck" className="text-green-600" size={18} />
                  <span>Гарантия возврата 30 дней</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Shield" className="text-green-600" size={18} />
                  <span>Безопасная оплата</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Truck" className="text-green-600" size={18} />
                  <span>Доставка по всей России</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-12">
          <h3 className="text-2xl font-bold mb-6">Рекомендуем к заказу</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((_, idx) => (
              <Card 
                key={idx}
                className="group cursor-pointer hover:shadow-xl transition-all border-0 animate-slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-xl"></div>
                <CardContent className="p-4">
                  <p className="font-semibold mb-2 line-clamp-2">Рекомендуемый товар</p>
                  <p className="text-lg font-bold">1 990₽</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cart;
