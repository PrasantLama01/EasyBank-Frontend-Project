ok I am going mobile first approach, how do I set up

Here is all the img properties
- hero-img its container's properties
.hero__img{
  position: relative; 
  order: 1;
  width: 100%;
  height: 90vw;
  z-index: 1;
}

- .product__img{ //product img div
  position: absolute;
  top: -7.7rem;
  left: 0;
  height: auto;
  z-index: 2;
  width: 100%;
  max-width: 100%;
}
- .product__mockup__img{ //hero-img
  width: 100%;
  max-width: 100%;
}

I want my product__mockup__img to stop from growing after it has reached certain size? Ofcourse I can do that by setting max-width to 100% but if that max-width is against the whole window screen then it means that it will grow as the size of the screen grows bigger.
