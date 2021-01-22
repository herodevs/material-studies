import { Injectable } from '@angular/core'
import { BehaviorSubject, interval, Observable, of } from 'rxjs'
import { map, startWith, switchMap } from 'rxjs/operators'

const LONG_CONTENT = `Lorem clique coast for the pouch loco of the franc assoc and accede. Dunce dunce docile for the loudness mastodon of the loud statehood and huddle. Enact enact eosin for the quench coed of the pique canoe and bleep. Furlong furlong focal for the genuflect profound of the motif aloof and orers. Gnome gnome gondola for the impugn logos of the unplug analog and smuggle. Human human hoist for the buddhist alcohol of the riyadh caliph and bathhouse.
Inlet inlet iodine for the quince champion of the ennui scampiand shiite. Justin justin jocose for the djibouti sojourn of the oranj raj and hajjis. Knoll knoll koala for the banknote lookout of the dybbuk outlook and trekked. Linden linden loads for the ulna monolog of the consul menthol and shallot. Milliner milliner modal for the alumna solomon of the album custom and summon.
Number number nodule for the unmade economic of the shotgun bison and tunnel. Onset onset oddball for the abandon podium of the antiquo tempo and moonlit. Pneumo pneumo poncho for the dauphin opossum of the holdup bishop and supplies. Quanta quanta qophs for the inquest sheqel of the cinq coq and suqqu. Rhone rhone roman for the burnt porous of the lemur clamor and carrot. Snout snout sodium for the ensnare bosom of the genus pathos and missing. Tundra tundra tocsin for the nutmeg isotope of the peasant ingot and ottoman. Uncle uncle udder for the dunes cloud of the hindu thou and continuum. Vulcan vulcan vocal for the alluvial ovoid of the yugoslav chekhov and revved. Whale whale woman for the meanwhile blowout of the forepaw meadow and glowworm.
Xmas xmas xenon for the bauxite doxology of the tableaux equinox and exxon. Yunnan yunnan young for the dynamo coyote of the obloquy employ and sayyid. Zloty zloty zodiac for the gizmo ozone of the franz laissez and buzzing.
Human human hoist for the buddhist alcohol of the riyadh caliph and bathhouse. Inlet inlet iodine for the quince champion of the ennui scampi and shiite. Justin justin jocose for the djibouti sojourn of the oranj raj and hajjis. Knoll knoll koala for the banknote lookout of the dybbuk outlook and trekked. Linden linden loads for the ulna monolog of the consul menthol and shallot.Dunce dunce docile for the loudness mastodon of the loud statehood and huddle. Enact enact eosin for the quench coed of the pique canoe and bleep. Furlong furlong focal for the genuflect profound of the motif aloof and others. Gnome gnome gondola for the impugn logos of the unplug analog and smuggle. Human human hoist for the buddhist alcohol of the riyadh caliph and bathhouse.
Inlet inlet iodine for the quince champion of the ennui scampi and shiite. Justin justin jocose for the djibouti sojourn of the oranj raj and hajjis. Knoll knoll koala for the banknote lookout of the dybbuk outlook and trekked. Linden linden loads for the ulna monolog of the consul menthol and shallot. Milliner milliner modal for the alumna solomon of the album custom and summon. Number number nodule for the unmade economic of the shotgun bison and tunnel. Onset onset oddball for the abandon podium of the antiquo tempo and moonlit. Pneumo pneumo poncho for the dauphin opossum of the holdup bishop and supplies. Quanta quanta qophs for the inquest sheqel of the cinq coq and suqqu. Rhone rhone roman for the burnt porous of the lemur clamor and carrot. Snout snout sodium for the ensnare bosom of the genus pathos and missing.
`

const SHORT_CONTENT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.`

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  getBarChartData(
    nodeCount: number,
    refreshTimer = 1000
  ): Observable<number[]> {
    const numbers = Array.from({ length: nodeCount }, () => Math.random())
    const subject = new BehaviorSubject<number[]>(numbers)
    return interval(refreshTimer).pipe(
      startWith(subject.getValue()),
      switchMap(() => {
        const newNumbers = subject.getValue().slice(1).concat([Math.random()])
        subject.next(newNumbers)
        return subject.asObservable()
      })
    )
  }

  getContentCards() {
    return of(CONTENT_CARDS)
  }

  getContentSmallCards() {
    return of(SMALL_CARDS)
  }

  getContentStock() {
    return of(STOCKS)
  }

  getTabs() {
    return of(TABS)
  }

  getContent(link: string) {
    return of(CONTENT_CARDS).pipe(
      map((data: Array<any>) => {
        return data.filter((article) => article.link === link)[0]
      })
    )
  }
}

const TABS = [
  { title: '#General', link: '' },
  { title: '#Food', link: 'Food' },
  { title: '#World', link: 'World' },
  { title: '#Politics', link: 'politics' },
  { title: '#Opinion', link: 'Opinion' },
]

const STOCKS = [
  {
    title: 'DJIA',
    value: 7031.211,
    percent: '- 0.48%',
  },
  {
    title: 'SP',
    value: 1967.87,
    percent: '- 0.00%',
  },
  {
    title: 'Nasdaq',
    value: 6211.46,
    percent: '+ 0.52%',
  },
  {
    title: 'Nikkei',
    value: 5891,
    percent: '+ 1.16%',
  },
]

const CONTENT_CARDS = [
  {
    image:
      'https://imagenes.20minutos.es/files/article_amp/uploads/2020/03/04/llama-o-alpaca.jpeg',
    imageAlt: 'Image Alt',
    title: 'Llamas Patrol the Central Coast of California',
    subtitle: 'World',
    views: '2M',
    text: SHORT_CONTENT,
    content: LONG_CONTENT,
    link: 'Llamas-Patrol-the-Central-Coast-of-California',
  },
  {
    image:
      'https://cdn.glitch.com/62e2261a-7e39-4dae-832f-57566e5fe6b2%2Fstock-photo-barcelona-poblenou-by-michseixas-143329895.jpg?v=1581723642934',
    imageAlt: 'Image Alt',
    title: 'The History, and Triumphant Return, of the Urban Cyclist',
    subtitle: 'Opinion',
    views: '2M',
    text: SHORT_CONTENT,
    content: LONG_CONTENT,
    link: 'The-History-and-Triumphant-Return-of-the-Urban-Cyclist',
  },
  {
    image:
      'https://cdn.glitch.com/62e2261a-7e39-4dae-832f-57566e5fe6b2%2Fstock-photo-tel-aviv-lev-hair-by-studio-zooz-144342493.jpg?v=1581723620380',
    imageAlt: 'Image Alt',
    title: 'Inside the World of Accessibility in Modern Architecture',
    subtitle: 'World',
    views: '2M',
    text: SHORT_CONTENT,
    content: LONG_CONTENT,
    link: 'Inside-the-World-of-Accessibility-in-Modern-Architecture',
  },
  {
    image:
      'https://cdn.glitch.com/62e2261a-7e39-4dae-832f-57566e5fe6b2%2Fstock-photo-tel-aviv-tzafon-yashan-by-studio-zooz-144438341%20(1).jpg?v=1581723619107',
    imageAlt: 'Image Alt',
    title: 'Sorbet Finds New Life in a Dairy-free World',
    subtitle: 'Food',
    views: '2M',
    text: SHORT_CONTENT,
    content: LONG_CONTENT,
    link: 'Sorbet-Finds-New-Life-in-a-Dairy-free-World',
  },
  {
    image:
      'https://cdn.glitch.com/62e2261a-7e39-4dae-832f-57566e5fe6b2%2Fstock-photo-berlin-mitte-by-alexandercoggin-145568969.jpg?v=1581723585163',
    imageAlt: 'Image Alt',
    title: 'The Political Force of Mass Transit Enthusiasts',
    subtitle: 'Politics',
    views: '2M',
    text: SHORT_CONTENT,
    content: LONG_CONTENT,
    link: 'The-Political-Force-of-Mass-Transit-Enthusiasts',
  },
  {
    image:
      'https://cdn.glitch.com/62e2261a-7e39-4dae-832f-57566e5fe6b2%2Fstock-photo-buenos-aires-belgrano-by-nickg-144798999.jpg?v=1581723552863',
    imageAlt: 'Image Alt',
    title: 'A New Meaning for Healthy Living',
    subtitle: 'Food',
    views: '2M',
    text: SHORT_CONTENT,
    content: LONG_CONTENT,
    link: 'A-New-Meaning-for-Healthy-Living',
  },
  {
    image:
      'https://cdn.glitch.com/62e2261a-7e39-4dae-832f-57566e5fe6b2%2Fstock-photo-barcelona-sants-montjuic-by-martacorada-145568063.jpg?v=1583451244522',
    imageAlt: 'Image Alt',
    title: 'The Secret Life of Birds',
    subtitle: 'Opinion',
    views: '2M',
    text: SHORT_CONTENT,
    content: LONG_CONTENT,
    link: 'The-Secret-Life-of-Birds',
  },
  {
    image:
      'https://cdn.glitch.com/62e2261a-7e39-4dae-832f-57566e5fe6b2%2Fstock-photo-austin-upper-boggy-creek-by-austin-hansen-146834823.jpg?v=1583452829012',
    imageAlt: 'Image Alt',
    title: 'A Fast Food Revival',
    subtitle: 'Food',
    views: '2M',
    text: SHORT_CONTENT,
    content: LONG_CONTENT,
    link: 'A-Fast-Food-Revival',
  },
  {
    image:
      'https://cdn.glitch.com/62e2261a-7e39-4dae-832f-57566e5fe6b2%2Fstock-photo-dc-park-by-summerky-143715643.jpg?v=1583452856080',
    imageAlt: 'Image Alt',
    title: 'How to Find a Great Dog Trainer',
    subtitle: 'World',
    views: '2M',
    text: SHORT_CONTENT,
    content: LONG_CONTENT,
    link: 'How-to-Find-a-Great-Dog-Trainer',
  },
  {
    image:
      'https://cdn.glitch.com/62e2261a-7e39-4dae-832f-57566e5fe6b2%2Fstock-photo-austin-old-west-austin-by-austin-hansen-146837833.jpg?v=1583452978404',
    imageAlt: 'Image Alt',
    title: 'Maker Profile: Handmade in Austin',
    subtitle: 'World',
    views: '2M',
    text: SHORT_CONTENT,
    content: LONG_CONTENT,
    link: 'Maker-Profile-Handmade-in-Austin',
  },
]

CONTENT_CARDS.forEach((card: any, i) => {
  card.related = [
    CONTENT_CARDS[(i + 1) % CONTENT_CARDS.length],
    CONTENT_CARDS[(i + 3) % CONTENT_CARDS.length],
    CONTENT_CARDS[(i + 5) % CONTENT_CARDS.length],
  ]
})

const SMALL_CARDS = [
  {
    image:
      'https://imagenes.20minutos.es/files/article_amp/uploads/2020/03/04/llama-o-alpaca.jpeg',
    category: 'WORLD',
    title: 'Llamas Patrol the Central Coast of California',
    link: 'Llamas-Patrol-the-Central-Coast-of-California',
    subtitle: SHORT_CONTENT,
    author: 'John Deere',
    views: '112K',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    related: [CONTENT_CARDS[0], CONTENT_CARDS[1], CONTENT_CARDS[2]],
    chips: ['OPINION', 'LIFESTYLE'],
    content: LONG_CONTENT,
  },
  {
    image:
      'https://cdn.glitch.com/62e2261a-7e39-4dae-832f-57566e5fe6b2%2Fstock-photo-austin-old-west-austin-by-austin-hansen-146837833.jpg?v=1583452978404',
    category: 'WORLD',
    link: 'Maker-Profile-Handmade-in-Austin',
    title: 'Maker Profile: Handmade in Austin',
    author: 'John Deere',
    views: '4.7K',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    related: [CONTENT_CARDS[0], CONTENT_CARDS[1], CONTENT_CARDS[2]],
    chips: ['OPINION', 'LIFESTYLE'],
    subtitle: SHORT_CONTENT,
    content: LONG_CONTENT,
  },
  {
    image:
      'https://cdn.glitch.com/62e2261a-7e39-4dae-832f-57566e5fe6b2%2Fstock-photo-berlin-mitte-by-alexandercoggin-145568969.jpg?v=1581723585163',
    category: 'POLITICS',
    link: 'The-Political-Force-of-Mass-Transit-Enthusiasts',
    title: 'The Political Force of Mass Transit Enthusiasts',
    author: 'John Deere',
    views: '23.1K',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    related: [CONTENT_CARDS[0], CONTENT_CARDS[1], CONTENT_CARDS[2]],
    chips: ['OPINION', 'LIFESTYLE'],
    subtitle: SHORT_CONTENT,
    content: LONG_CONTENT,
  },
  {
    image:
      'https://cdn.glitch.com/62e2261a-7e39-4dae-832f-57566e5fe6b2%2Fstock-photo-tel-aviv-tzafon-yashan-by-studio-zooz-144438341%20(1).jpg?v=1581723619107',
    category: 'FOOD',
    link: 'Sorbet-Finds-New-Life-in-a-Dairy-free-World',
    title: 'Sorbet Finds New Life in a Dairy-free World',
    author: 'John Deere',
    views: '8.2K',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    related: [CONTENT_CARDS[0], CONTENT_CARDS[1], CONTENT_CARDS[2]],
    chips: ['OPINION', 'LIFESTYLE'],
    subtitle: SHORT_CONTENT,
    content: LONG_CONTENT,
  },
]
