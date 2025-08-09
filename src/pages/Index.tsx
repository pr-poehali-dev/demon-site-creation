import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const clanMembers = [
    { name: "DarkLord666", rank: "Предводитель", level: 99, status: "online" },
    { name: "ShadowReaper", rank: "Заместитель", level: 87, status: "online" },
    { name: "BloodMage", rank: "Элита", level: 78, status: "away" },
    { name: "FlameDemon", rank: "Воин", level: 65, status: "offline" },
    { name: "VoidWalker", rank: "Воин", level: 58, status: "online" },
    { name: "CrimsonBlade", rank: "Новичок", level: 32, status: "online" }
  ];

  const clanLinks = [
    { name: "Discord", url: "#", icon: "MessageCircle" },
    { name: "Steam Group", url: "#", icon: "Gamepad2" },
    { name: "Telegram", url: "#", icon: "Send" },
    { name: "YouTube", url: "#", icon: "Play" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-demon-dark via-hell-blood to-zest-blue">
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-hell-red/20 to-zest-blue/20 backdrop-blur-sm"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Icon name="Flame" className="text-hell-red mr-4" size={48} />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-hell-flame to-zest-frost bg-clip-text text-transparent">
              DEMON ZEST
            </h1>
            <Icon name="Zap" className="text-zest-blue ml-4" size={48} />
          </div>
          <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto">
            Элитный игровой клан из глубин ада. Мы покоряем виртуальные миры с яростью демонов и холодным расчетом стратегов.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Badge variant="destructive" className="px-4 py-2 text-lg bg-hell-red">
              <Icon name="Crown" className="mr-2" size={20} />
              Основан в 2019
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-lg bg-zest-blue">
              <Icon name="Users" className="mr-2" size={20} />
              50+ Участников
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        {/* About Clan */}
        <section className="mb-16">
          <Card className="bg-card/50 backdrop-blur-sm border-hell-red/30">
            <CardHeader>
              <CardTitle className="text-3xl text-center flex items-center justify-center">
                <Icon name="Info" className="mr-3 text-hell-flame" size={32} />
                О клане
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg leading-relaxed">
              <p className="mb-4">
                Demon Zest — это братство воинов, объединенных страстью к победе и духом соперничества. 
                Мы специализируемся на PvP сражениях, рейдах высокого уровня и доминировании на арене.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-hell-flame">🎯 Наши цели:</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Топ-10 в мировом рейтинге PvP</li>
                    <li>• Еженедельные рейды на боссов</li>
                    <li>• Взаимопомощь и развитие</li>
                    <li>• Участие в турнирах</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-zest-frost">⚡ Требования:</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Уровень персонажа 50+</li>
                    <li>• Активность 4+ дня в неделю</li>
                    <li>• Дискорд с микрофоном</li>
                    <li>• Командный дух</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Photo Gallery */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8 flex items-center justify-center">
            <Icon name="Camera" className="mr-3 text-hell-flame" size={36} />
            Галерея побед
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Main featured images */}
            <Card className="group hover:scale-105 transition-transform duration-300 bg-card/30 border-hell-red/20 col-span-2">
              <div className="aspect-video rounded-lg relative overflow-hidden">
                <img 
                  src="/img/ab3ecb5c-cfc9-4497-bbb6-c7408a79e8fa.jpg" 
                  alt="Эпичная битва клана" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-lg font-bold">Победа над Драконом Тьмы</p>
                  <p className="text-sm">Эпичный рейд клана</p>
                </div>
              </div>
            </Card>

            <Card className="group hover:scale-105 transition-transform duration-300 bg-card/30 border-hell-red/20">
              <div className="aspect-video rounded-lg relative overflow-hidden">
                <img 
                  src="/img/fd339a8f-134e-4729-8fb0-6ae6301cf888.jpg" 
                  alt="Зал клана" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 left-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-sm font-semibold">Зал клана</p>
                </div>
              </div>
            </Card>

            <Card className="group hover:scale-105 transition-transform duration-300 bg-card/30 border-hell-red/20">
              <div className="aspect-video rounded-lg relative overflow-hidden">
                <img 
                  src="/img/1b835bab-fe99-4782-b807-9e1de48587de.jpg" 
                  alt="Праздник победы" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 left-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-sm font-semibold">Праздник победы</p>
                </div>
              </div>
            </Card>

            {/* Placeholder cards */}
            {[4, 5, 6].map((i) => (
              <Card key={i} className="group hover:scale-105 transition-transform duration-300 bg-card/30 border-hell-red/20">
                <div className="aspect-video bg-gradient-to-br from-hell-blood to-demon-shadow rounded-lg flex items-center justify-center relative overflow-hidden">
                  <Icon name="Image" className="text-muted-foreground group-hover:text-hell-flame transition-colors" size={48} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-2 left-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm font-semibold">Рейд #{i}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Members List */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8 flex items-center justify-center">
            <Icon name="Users" className="mr-3 text-zest-frost" size={36} />
            Состав клана
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {clanMembers.map((member, index) => (
              <Card key={index} className="bg-card/40 border-hell-red/20 hover:border-hell-flame/50 transition-all duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <div className={`w-3 h-3 rounded-full ${
                      member.status === 'online' ? 'bg-green-500' :
                      member.status === 'away' ? 'bg-yellow-500' : 'bg-gray-500'
                    }`} />
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant={member.rank === 'Предводитель' ? 'destructive' : 'secondary'} className="text-xs">
                      {member.rank}
                    </Badge>
                    <span className="text-sm text-muted-foreground">Ур. {member.level}</span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Button size="sm" variant="ghost" className="flex-1 text-xs">
                      <Icon name="MessageSquare" size={14} className="mr-1" />
                      Написать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Clan Links */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-8 flex items-center justify-center">
            <Icon name="Link" className="mr-3 text-hell-flame" size={36} />
            Наши ресурсы
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {clanLinks.map((link, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 bg-card/40 border-zest-blue/20 hover:border-zest-frost/50">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <Icon 
                      name={link.icon as any} 
                      className="mx-auto text-zest-blue group-hover:text-zest-frost transition-colors" 
                      size={40} 
                    />
                  </div>
                  <h3 className="font-bold mb-2">{link.name}</h3>
                  <Button 
                    variant="outline" 
                    className="w-full border-zest-blue/50 hover:bg-zest-blue hover:text-white"
                  >
                    Перейти
                    <Icon name="ExternalLink" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Join Section */}
        <section className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-hell-red/20 to-zest-blue/20 border-hell-flame/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <Icon name="Swords" className="mx-auto mb-4 text-hell-flame" size={48} />
              <h2 className="text-3xl font-bold mb-4">Присоединяйся к легенде!</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Готов стать частью элитного клана? Подай заявку и докажи свою силу в бою!
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button size="lg" className="bg-hell-red hover:bg-hell-blood text-white px-8">
                  <Icon name="UserPlus" className="mr-2" size={20} />
                  Подать заявку
                </Button>
                <Button size="lg" variant="outline" className="border-zest-blue text-zest-blue hover:bg-zest-blue hover:text-white px-8">
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Связаться с нами
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Index;