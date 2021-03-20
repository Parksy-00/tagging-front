import { atom, selector } from 'recoil'

let myMap = new Map();
myMap.set('2014년', ['6월', '9월', '1단원', '4단원'])
myMap.set('2015년', ['6월', '9월', '1단원', '4단원'])
myMap.set('2016년', ['6월', '9월', '1단원', '4단원'])
myMap.set('6월', ['2014년', '2015년', '2016년', '1단원', '4단원'])
myMap.set('9월', ['2014년', '2015년', '2016년', '1단원', '4단원'])
myMap.set('1단원', ['2014년', '2015년', '2016년', '6월', '9월', '중요'])
myMap.set('4단원', ['2014년', '2015년', '2016년', '6월', '9월'])
myMap.set('중요', ['1단원'])


const intersection = arrays => {
    const len = arrays.length
    if (len === 1) return arrays[0];

    if (len > 2)
        return intersection([intersection(arrays.slice(0, len / 2)), 
                             intersection(arrays.slice(len / 2))]);
    //len == 2
    else return arrays[0].filter((item) => (arrays[1].indexOf(item) !== -1));
}

const relatedTags = atom({
  key: 'relatedTags',
  default: myMap,
});

const tagList = selector({
    key: 'tagList',
    get: ({get}) => {
        const tagMap = get(relatedTags)
        return [ ...tagMap.keys() ]
    }
})

const selectedTags = atom({
    key: 'selectedAtom',
    default: [],
})

const recommandList = selector({
    key: 'recommandList',
    get: ({get}) => {
        let selected = get(selectedTags)
        const related = get(relatedTags)
        const allTag = get(tagList)

        selected = selected.filter( (tag) => related.has(tag) )
        if(selected.length === 0) return allTag 
        else return intersection(selected.map( (tag) => related.get(tag) ))
    }
})

export {relatedTags, selectedTags, tagList, recommandList}