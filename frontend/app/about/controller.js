import Ember from 'ember';

export default Ember.Controller.extend({
  i18n: Ember.inject.service(),

  // aboutMessage: Ember.computed(function () {
  //   return this.get('i18n').t('about.message');
  // })

  aboutMessage: 'Chodíte každý den alejí stromů, krásným parkem nebo třeba kolem rozestavěné budovy? A napadla vás někdy myšlenka, že by bylo fajn, se každý den postavit na stejné místo a foťákem nebo mobilem den za dnem zachycovat postupnou proměnu místa v čase a nakonec z toho udělat kůl video? Koho by to nepadalo, že ano? Jenže pak člověka napadnou samá ale, jako, že netrefí přesně stejné místo, že tudy přeci nechodí úplně každý den, nebo že prostě zapomene a nakonec ten nápad prostě odsune stranou.\n\nProjekt Tajmlaps vyřeší většinu těchto starostí za vás.\n\nJediné co potřebujete je telefon s fotoaparátem a účet na twitteru. Pak už si stačí jen vybrat jakékoliv místo, které je součástí projektu a jít fotit.\nO focení v čase pak prostě další lidé zapojení do projektu.\n\nFotky se pak spojí jednoduše tak, že je tweetnete spolu s hashtagem.\n\nO focení v čase se postarají další lidé zapojení do projektu. Každý projekt má svůj unikátní hashtag, díky kterému se fotky následně spojí do časosběrného videa. Aktuálně běží jeden testovací projekt s hashtagem #plzenCasosberne, který sbírá fotky pouze z twitteru, ale brzy přibudou další možnosti, jak fotografii přidat (Instagram, facebook, ...).\n\nViz ukázkový tweet.',

  aboutMailMessage: 'Nemáte Twitter? Nevadí. Experimentujeme s podporou e-mailů. Stačí úvést příslušný hashtag v předmětu mailu, obrázek dát do přílohy a e-mail poslat na: <a href="mailto:casosberne@gmail.com?subject=#mujHashtag">casosberne@gmail.com</a>.'
});
