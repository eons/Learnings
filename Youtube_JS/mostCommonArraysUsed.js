//https://www.youtube.com/watch?v=5yPf74sCu2k&ab_channel=CarlosAzaustre-AprendeJavaScript

const posts = [{
    id: 1,
    title: 'Mi primer post',
    image: 'https://img.com/1',
    tags: ['javascript', 'automationtesting'],
}, {
    id: 2,
    title: 'Mi experiencia con playwright',
    image: 'https://img.com/2',
    tags: ['javascript', 'automationtesting', 'playwright', 'tester'],
    
}, {
    id: 3,
    title: 'Por que deje selenium',
    image: 'https://img.com/3',
    tags: ['javascript', 'automationtesting', 'selenium', 'tester'],
    reference: 'QE'
}]

posts.find(post => post.title == "Por que deje selenium"); //all array with title "Por que deje selenium"
posts.find(post => post.id == 1); //all array with id 1

posts.some(post => post.id === 4); //false
posts.some(post => post.id === 1); //true

posts.some(post => post.tags.includes('cypress')); //false
posts.some(post => post.tags.includes('playwright')); //true
//some it's looking if some of the arrays includes the value if yes then retuns true else false


posts.every(post => post.tags.includes('javascript')); //true
posts.every(post => post.tags.includes('playwright')); //false
//every it's looking if all the arrays includes the value if yes then retuns true else false

posts.map(post => post.title); //a new array with all the titles... map is a declarative function...
//the difference between imprerative a delacrative is the first one says waht is doing while declarative
//says what you want to do (in summary)
posts.filter(post => post.tags.includes('tester')); //arrays that includes the tag filter

posts.filter(post => post.reference !== undefined); //returs the arrays that have the reference declare
//in this case only the third array has the reference field 'QE'
posts.filter(post => post?.reference); //does the same as the above but it's a new feature called nullish or coalising


posts.reduce((alltags, post) => {
    return [...alltags, ...post.tags]
  }, []); //returns all the tags for all teh arrays

posts.reduce((alltags, post) => {
    return Array.from(new Set([...alltags, ...post.tags]))
}, []); //returns all the tags not repeated from the arrays because of the Set property

posts.reduce((alltags, post) => {
  return [...alltags, ...post.tags]
}, []).filter((post, index, self) => index === self.indexOf(post)); //doing the same that above but with previous features...
//by using filter insted of Set