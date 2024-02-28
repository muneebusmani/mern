class entry {
  public id: number;
  public cardImgSrc: string;
  public cardImgAlt: string;
  public cardTitle: string;
  public cardText: string;
  public cardLink: string;
  public cardLinkText: string;

  public constructor(
    id: number,
    cardImgSrc: string,
    cardImgAlt: string,
    cardTitle: string,
    cardText: string,
    cardLink: string,
    cardLinkText: string,
  ) {
    this.id = id;
    this.cardImgSrc = cardImgSrc;
    this.cardImgAlt = cardImgAlt;
    this.cardTitle = cardTitle;
    this.cardText = cardText;
    this.cardLink = cardLink;
    this.cardLinkText = cardLinkText;
  }
}

const cardEntries = [
  new entry(
    1,
    "https://picsum.photos/200/300",
    "Sample Image",
    "Sample title",
    "Sample text",
    "https://google.com",
    "Sample Link",
  ),
  new entry(
    2,
    "https://picsum.photos/200/300",
    "Sample Image",
    "Sample title",
    "Sample text",
    "https://google.com",
    "Sample Link",
  ),
  new entry(
    3,
    "https://picsum.photos/200/300",
    "Sample Image",
    "Sample title",
    "Sample text",
    "https://google.com",
    "Sample Link",
  ),
  new entry(
    4,
    "https://picsum.photos/200/300",
    "Sample Image",
    "Sample title",
    "Sample text",
    "https://google.com",
    "Sample Link",
  ),
  new entry(
    5,
    "https://picsum.photos/200/300",
    "Sample Image",
    "Sample title",
    "Sample text",
    "https://google.com",
    "Sample Link",
  ),
];
export { cardEntries, entry };
