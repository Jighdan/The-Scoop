import { Firebase } from '../../../config/firebaseconfig';

const getArticles = async (sourceObj) => {
    const sourceRef = Firebase.firestore().collection('articles').doc('sources').collection(sourceObj);
    const articles = await sourceRef.get()
    let allData = [];
    articles.forEach((article)=>{
        const data = article.data()
        allData.push(data)
        
    })
    return allData;
}

export { getArticles }