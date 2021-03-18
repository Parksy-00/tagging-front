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

function intersection(a) {
    if (a.length > 2)
        return intersection([intersection(a.slice(0, a.length / 2)), intersection(a.slice(a.length / 2))]);

    if (a.length == 1)
        return a[0];

    return a[0].filter(function(item) {
        return a[1].indexOf(item) !== -1;
    });
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
        const selected = get(selectedTags)
        const related = get(relatedTags)
        const allTag = get(tagList)

        if(selected.length === 0) return allTag 
        else return intersection(selected.filter( (tag) => related.has(tag) )
                                         .map( (tag) => related.get(tag) ))
    }
})

export {relatedTags, selectedTags, tagList, recommandList}