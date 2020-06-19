import React from 'react';

class CatList extends React.Component {
    listCats = () => {
        return this.props.catPics.map(cat => <img key={cat.id} alt={cat.id} src={cat.url} />)
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