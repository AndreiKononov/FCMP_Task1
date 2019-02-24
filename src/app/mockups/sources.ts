import { SourceModel } from '../models/index';

export let mockedSources: SourceModel[] = [{
  id: 'al-jazeera-english',
  name: 'Al Jazeera English',
  description: 'News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.',
  url: 'http://www.aljazeera.com',
  category: 'general',
  language: 'en',
  country: 'us'
}, {
  id: 'bbc-news',
  name: 'BBC News',
  description: 'Use BBC News for up-to-the-minute news, breaking news, video, audio and feature stories. BBC News provides trusted World and UK news as well as local and regional perspectives. Also entertainment, business, science, technology and health news.',
  url: 'http://www.bbc.co.uk/news',
  category: 'general',
  language: 'en',
  country: 'gb'
}, {
  id: 'bild',
  name: 'Bild',
  description: 'Die Seite 1 für aktuelle Nachrichten und Themen, Bilder und Videos aus den Bereichen News, Wirtschaft, Politik, Show, Sport, und Promis.',
  url: 'http://www.bild.de',
  category: 'general',
  language: 'de',
  country: 'de'
}, {
  id: 'the-irish-times',
  name: 'The Irish Times',
  description: 'The Irish Times online. Latest news including sport, analysis, business, weather and more from the definitive brand of quality news in Ireland.',
  url: 'https://www.irishtimes.com',
  category: 'general',
  language: 'en',
  country: 'ie'
}];
