# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

projects = Project.create([
  {
    name: 'Křížek u Vejprnic',
    description: 'Na okraji Vejprnic, na rozcestí nově obnovených polních cest a zčerstva vysázených alejí javorů a jabloní, stojí ve stínu dvou mohutných lip velký dřevěný kříž. Jeho původ je nám dosud neznámý, jisté však je, že zde stojí již několik generací. Nejen místní obyvatelé se u něj pak zastavují na svých procházkách, aby si odpočinuli na lavičkách rovněž ukrytých ve stínu stromů. Od křížku se člověku také otevírá výhled na nelakou Plzeň. A i když se většina města schovává v dolíku, je odtud krásně vidět hrad Radyně, rozhledna na Sylvánu, či vrch Krkavec.\nA proč jsme první TajmLapster umístili právě sem? Důvodů je hned několik. Předně je to účel projektu jako takový, tedy zachytávání proměny místa v čase. A na čem jiném jsou v průběhu ročních období lépe vidět změny, než na krásných vzrostlých stromech?\nDalším důvodem je relativně klidné místo, daleko (jak alespoň doufáme) od městských vandalů a nenechavých rukou sběračů kovů. Zároveň je to ale místo, kde se kříží několik cest, včetně hojně využívané cyklostezky, od čehož si slibujeme trvalý přísun nových fotografií.\nA v neposlední řadě láká k návštěvě místa i blízká keška.',
    hashtag: 'plzenCasosberne',
    cursor: 699924660289478656,
    image: 'http://api.adorable.io/avatars/256/a'
  }
])

posts = [
  { project_id: 1, body: '', image: 'https://pbs.twimg.com/media/CammN7iXEAE5542.jpg', parser_id: 1 },
  { project_id: 1, body: '', image: 'https://pbs.twimg.com/media/CasKIXOUAAA7EIl.jpg', parser_id: 1 },
  { project_id: 1, body: '', image: 'https://pbs.twimg.com/media/CayRwr3XEAIg5TO.jpg', parser_id: 1 },
  { project_id: 1, body: '', image: 'https://pbs.twimg.com/media/Ca2pgz1WIAA3bRW.jpg', parser_id: 1 },
  { project_id: 1, body: '', image: 'https://pbs.twimg.com/media/CbAlexPW8AAATMO.jpg', parser_id: 1 },
  { project_id: 1, body: '', image: 'https://pbs.twimg.com/media/CbLu1POWEAE8EZC.jpg', parser_id: 1 },
  { project_id: 1, body: '', image: 'https://pbs.twimg.com/media/CbQR5oHWwAAU-vA.jpg', parser_id: 1 },
  { project_id: 1, body: '', image: 'https://pbs.twimg.com/media/Cbahvp_W0AEP7Ly.jpg', parser_id: 1 }
]

posts.each do |post|
  post[:body] = "#plzenCasosberne #{post[:image]}"
  Post.create(post)
end

Parser.create([
  { domain: 'twitter.com', css_selector: '.AdaptiveMedia-photoContainer img' },
  { domain: 'www.instagram.com', css_selector: 'article img' }
])
