import React from 'react';
import Cat from './Cat.js';

class CatList extends React.Component {
    
    listCats = () => {
        return this.props.catPics.map(cat => <Cat key={cat.id} cat={cat} />)
    }

    render() {
        return (
            <div>
                {this.listCats()}
            </div>
        )
    }
}
export default CatList;