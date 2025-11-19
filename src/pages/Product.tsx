import { useState } from 'react';
import { useCartStore } from '@/lib/cartStore';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const navigate = useNavigate();
  const { addItem, getTotalItems } = useCartStore();
  const cartCount = getTotalItems();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const product = {
    id: 1,
    name: 'Беспроводные наушники Premium ANC Pro',
    price: 12990,
    oldPrice: 15990,
    rating: 4.8,
    reviews: 342,
    discount: 19,
    inStock: true,
    images: [
      'https://cdn.poehali.dev/projects/d4423e7e-a730-404f-b519-ce44235d09a3/files/71f28146-904d-453d-aad3-3cb9bbf87b00.jpg',
      'https://cdn.poehali.dev/projects/d4423e7e-a730-404f-b519-ce44235d09a3/files/f3e89b12-6b0c-48f9-bfc8-b8a8260f3fb2.jpg',
      'https://cdn.poehali.dev/projects/d4423e7e-a730-404f-b519-ce44235d09a3/files/3f33af8f-f557-43df-8445-5365f7ce7591.jpg',
    ],
    features: [
      { icon: 'Volume2', title: 'Активное шумоподавление', desc: 'ANC до 30дБ' },
      { icon: 'Battery', title: 'До 40 часов', desc: 'Автономная работа' },
      { icon: 'Bluetooth', title: 'Bluetooth 5.3', desc: 'Стабильное соединение' },
      { icon: 'Mic', title: 'HD микрофон', desc: 'Кристальный звук' },
    ],
    specs: [
      { label: 'Тип', value: 'Полноразмерные' },
      { label: 'Подключение', value: 'Bluetooth 5.3, AUX' },
      { label: 'Аккумулятор', value: '600 мАч' },
      { label: 'Время зарядки', value: '2 часа' },
      { label: 'Вес', value: '250 г' },
      { label: 'Гарантия', value: '2 года' },
    ]
  };

  const reviews = [
    {
      id: 1,
      author: 'Александр К.',
      rating: 5,
      date: '15 января 2025',
      verified: true,
      text: 'Отличные наушники! Звук чистый, басы глубокие. Шумоподавление работает превосходно в метро и самолёте. Удобно сидят даже после нескольких часов использования.',
      helpful: 24,
      images: ['https://cdn.poehali.dev/projects/d4423e7e-a730-404f-b519-ce44235d09a3/files/71f28146-904d-453d-aad3-3cb9bbf87b00.jpg']
    },
    {
      id: 2,
      author: 'Мария С.',
      rating: 5,
      date: '10 января 2025',
      verified: true,
      text: 'Пользуюсь уже месяц - очень довольна! Батарея действительно держит долго, звук качественный. Дизайн стильный, материалы приятные.',
      helpful: 18
    },
    {
      id: 3,
      author: 'Дмитрий В.',
      rating: 4,
      date: '5 января 2025',
      verified: false,
      text: 'Хорошие наушники за свою цену. Единственный минус - немного давят на уши после долгого ношения. В остальном всё отлично.',
      helpful: 12
    }
  ];

  const ratingStats = [
    { stars: 5, count: 245, percent: 72 },
    { stars: 4, count: 68, percent: 20 },
    { stars: 3, count: 20, percent: 6 },
    { stars: 2, count: 6, percent: 2 },
    { stars: 1, count: 3, percent: 1 },
  ];

  const similarProducts = [
    {
      id: 2,
      name: 'Умные часы Fitness Pro',
      price: 15990,
      oldPrice: 19990,
      rating: 4.7,
      image: 'https://cdn.poehali.dev/projects/d4423e7e-a730-404f-b519-ce44235d09a3/files/f3e89b12-6b0c-48f9-bfc8-b8a8260f3fb2.jpg',
    },
    {
      id: 3,
      name: 'Портативная колонка Sound',
      price: 4990,
      oldPrice: 6990,
      rating: 4.6,
      image: 'https://cdn.poehali.dev/projects/d4423e7e-a730-404f-b519-ce44235d09a3/files/3f33af8f-f557-43df-8445-5365f7ce7591.jpg',
    },
  ];

  const addToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0]
      });
    }
  };

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

            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative hover:bg-purple-100 rounded-xl"
                onClick={() => navigate('/cart')}
              >
                <Icon name="ShoppingCart" size={24} />
                {cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4 animate-fade-in">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-xl">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.discount && (
                <Badge className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 border-0 text-lg px-4 py-2 font-bold">
                  -{product.discount}%
                </Badge>
              )}
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all hover:scale-105 ${
                    selectedImage === idx 
                      ? 'border-purple-500 shadow-lg' 
                      : 'border-gray-200'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6 animate-slide-up">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="text-green-600 border-green-600">
                  В наличии
                </Badge>
                <Badge variant="outline">Быстрая доставка</Badge>
              </div>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1,2,3,4,5].map(star => (
                      <Icon 
                        key={star}
                        name="Star" 
                        className={`${star <= Math.round(product.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                        size={20}
                      />
                    ))}
                  </div>
                  <span className="font-bold text-lg">{product.rating}</span>
                </div>
                <Separator orientation="vertical" className="h-6" />
                <a href="#reviews" className="text-purple-600 hover:underline font-semibold">
                  {product.reviews} отзывов
                </a>
              </div>

              <div className="flex items-end gap-3 mb-6">
                <span className="text-5xl font-bold">{product.price.toLocaleString()}₽</span>
                {product.oldPrice && (
                  <span className="text-2xl text-gray-400 line-through mb-2">
                    {product.oldPrice.toLocaleString()}₽
                  </span>
                )}
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 text-green-700">
                  <Icon name="Gift" size={20} />
                  <span className="font-semibold">Экономия {(product.oldPrice! - product.price).toLocaleString()}₽</span>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Количество:</span>
                  <div className="flex items-center gap-3">
                    <Button 
                      variant="outline" 
                      size="icon"
                      className="rounded-xl"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Icon name="Minus" size={16} />
                    </Button>
                    <span className="text-xl font-bold w-8 text-center">{quantity}</span>
                    <Button 
                      variant="outline" 
                      size="icon"
                      className="rounded-xl"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Icon name="Plus" size={16} />
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="flex gap-3">
                  <Button 
                    size="lg" 
                    className="flex-1 h-14 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                    onClick={addToCart}
                  >
                    <Icon name="ShoppingCart" className="mr-2" size={20} />
                    В корзину
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className={`h-14 rounded-xl transition-all ${isFavorite ? 'bg-pink-50 border-pink-500' : ''}`}
                    onClick={() => setIsFavorite(!isFavorite)}
                  >
                    <Icon name="Heart" size={24} className={isFavorite ? 'fill-pink-500 text-pink-500' : ''} />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              {product.features.map((feature, idx) => (
                <Card key={idx} className="border-0 shadow-md hover:shadow-lg transition-all">
                  <CardContent className="p-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-3`}>
                      <Icon name={feature.icon as any} className="text-white" size={24} />
                    </div>
                    <p className="font-semibold mb-1">{feature.title}</p>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <Tabs defaultValue="description" className="mb-12">
          <TabsList className="grid w-full grid-cols-3 h-14 rounded-xl">
            <TabsTrigger value="description" className="text-base rounded-xl">Описание</TabsTrigger>
            <TabsTrigger value="specs" className="text-base rounded-xl">Характеристики</TabsTrigger>
            <TabsTrigger value="reviews" className="text-base rounded-xl">Отзывы ({product.reviews})</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">О товаре</h3>
                <div className="prose max-w-none space-y-4 text-gray-700">
                  <p>
                    Наушники Premium ANC Pro — это идеальное сочетание превосходного звука, 
                    комфорта и современных технологий. Разработаны для тех, кто ценит качество 
                    и не готов идти на компромиссы.
                  </p>
                  <p>
                    Активное шумоподавление (ANC) блокирует до 30 дБ внешних шумов, позволяя 
                    полностью погрузиться в музыку. Интеллектуальная система адаптируется к 
                    окружающей среде и автоматически настраивает уровень шумоподавления.
                  </p>
                  <p>
                    Аккумулятор ёмкостью 600 мАч обеспечивает до 40 часов автономной работы 
                    с включённым ANC и до 60 часов в обычном режиме. Быстрая зарядка USB-C 
                    даёт 5 часов работы всего за 10 минут зарядки.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specs" className="mt-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Технические характеристики</h3>
                <div className="grid gap-4">
                  {product.specs.map((spec, idx) => (
                    <div key={idx} className="flex justify-between items-center py-3 border-b last:border-0">
                      <span className="text-gray-600 font-medium">{spec.label}</span>
                      <span className="font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" id="reviews" className="mt-6">
            <Card className="border-0 shadow-lg mb-6">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="text-center mb-6">
                      <div className="text-6xl font-bold mb-2">{product.rating}</div>
                      <div className="flex justify-center mb-2">
                        {[1,2,3,4,5].map(star => (
                          <Icon 
                            key={star}
                            name="Star" 
                            className="text-yellow-500 fill-yellow-500"
                            size={24}
                          />
                        ))}
                      </div>
                      <p className="text-gray-600">На основе {product.reviews} отзывов</p>
                    </div>
                    <Button className="w-full rounded-xl h-12 bg-gradient-to-r from-purple-600 to-pink-600">
                      <Icon name="PenSquare" className="mr-2" size={20} />
                      Написать отзыв
                    </Button>
                  </div>

                  <div className="space-y-3">
                    {ratingStats.map(stat => (
                      <div key={stat.stars} className="flex items-center gap-3">
                        <div className="flex items-center gap-1 w-16">
                          <span className="font-semibold">{stat.stars}</span>
                          <Icon name="Star" className="text-yellow-500" size={16} />
                        </div>
                        <Progress value={stat.percent} className="flex-1 h-2" />
                        <span className="text-sm text-gray-600 w-12 text-right">{stat.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              {reviews.map((review, idx) => (
                <Card key={review.id} className="border-0 shadow-lg animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white font-bold">
                          {review.author[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-bold">{review.author}</span>
                          {review.verified && (
                            <Badge variant="outline" className="text-green-600 border-green-600 text-xs">
                              <Icon name="BadgeCheck" size={12} className="mr-1" />
                              Проверено
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex">
                            {[1,2,3,4,5].map(star => (
                              <Icon 
                                key={star}
                                name="Star" 
                                className={`${star <= review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                                size={16}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <p className="text-gray-700 mb-4">{review.text}</p>
                        {review.images && (
                          <div className="flex gap-2 mb-4">
                            {review.images.map((img, idx) => (
                              <img key={idx} src={img} alt="" className="w-24 h-24 rounded-lg object-cover" />
                            ))}
                          </div>
                        )}
                        <div className="flex items-center gap-4 text-sm">
                          <button className="flex items-center gap-1 text-gray-600 hover:text-purple-600 transition-colors">
                            <Icon name="ThumbsUp" size={16} />
                            <span>Полезно ({review.helpful})</span>
                          </button>
                          <button className="text-gray-600 hover:text-purple-600 transition-colors">
                            Ответить
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <section>
          <h3 className="text-3xl font-bold mb-6">Похожие товары</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarProducts.map((item, idx) => (
              <Card 
                key={item.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-gray-100 to-gray-200">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    <Icon name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                    <span className="font-semibold text-sm">{item.rating}</span>
                  </div>
                  <h4 className="font-semibold mb-3 line-clamp-2 min-h-[48px]">{item.name}</h4>
                  <div className="flex items-end gap-2">
                    <span className="text-xl font-bold">{item.price.toLocaleString()}₽</span>
                    {item.oldPrice && (
                      <span className="text-gray-400 line-through text-sm mb-0.5">
                        {item.oldPrice.toLocaleString()}₽
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product;