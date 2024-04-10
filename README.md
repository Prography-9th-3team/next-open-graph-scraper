## Next / open-graph-scraper

-   Next v14 + App Router
-   Route Handler
-   url-metadata

### 프로젝트 실행

```
# git clone
git clone https://github.com/Prography-9th-3team/next-open-graph-scraper.git

# change directory
cd next-open-graph-scraper

# install
npm install

# start
npm run dev
```

### 구현

![Apr-11-2024 00-50-50](https://github.com/Prography-9th-3team/next-open-graph-scraper/assets/77668478/a4bc5c41-1933-444e-98b8-e88d719d36f0)

- fetch time 0.5 ~ 1.0ms

**Response data**
```
{
  requestUrl: 'https://www.naver.com/',
  url: 'https://www.naver.com/',
  canonical: '',
  lang: 'ko',
  charset: 'utf-8',
  title: 'NAVER',
  image: '',
  favicons: [
    {
      rel: 'apple-touch-icon',
      type: undefined,
      href: 'https://s.pstatic.net/static/www/u/2014/0328/mma_204243574.png',
      sizes: '114x114'
    },
    {
      rel: 'apple-touch-icon',
      type: undefined,
      href: 'https://s.pstatic.net/static/www/u/2014/0328/mma_20432863.png',
      sizes: undefined
    }
  ],
  author: '',
  description: '네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요',
  keywords: '',
  source: '',
  price: '',
  priceCurrency: '',
  availability: '',
  robots: 'index,nofollow',
  jsonld: [],
  'og:url': 'https://www.naver.com/',
  'og:locale': '',
  'og:locale:alternate': '',
  'og:title': '네이버',
  'og:type': '',
  'og:description': '네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요',
  'og:determiner': '',
  'og:site_name': '',
  'og:image': 'https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png',
  'og:image:secure_url': '',
  'og:image:type': '',
  'og:image:width': '',
  'og:image:height': '',
  'twitter:title': '',
  'twitter:description': '네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요',
  'twitter:image': 'https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png',
  'twitter:image:alt': '',
  'twitter:card': 'summary',
  'twitter:site': '',
  'twitter:site:id': '',
  'twitter:url': 'https://www.naver.com/',
  'twitter:account_id': '',
  'twitter:creator': '',
  'twitter:creator:id': '',
  'twitter:player': '',
  'twitter:player:width': '',
  'twitter:player:height': '',
  'twitter:player:stream': '',
  'twitter:app:name:iphone': '',
  'twitter:app:id:iphone': '',
  'twitter:app:url:iphone': '',
  'twitter:app:name:ipad': '',
  'twitter:app:id:ipad': '',
  'twitter:app:url:ipad': '',
  'twitter:app:name:googleplay': '',
  'twitter:app:id:googleplay': '',
  'twitter:app:url:googleplay': '',
  headings: [ { level: 'h1', text: '' } ],
  imgTags: [],
  responseBody: '',
  Referrer: 'origin',
  'X-UA-Compatible': 'IE=edge',
  viewport: 'width=1190',
  'apple-mobile-web-app-title': 'NAVER'
}
```
