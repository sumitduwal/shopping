import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../Components/Collection-Preview/CollectionPreview.component';

class ShopPage extends React.Component{
    constructor(Props){
        super(Props);

this.state={
    collections: SHOP_DATA
};

    }

    render(){
        const { collections } =this.state;
        return (
             <div className="shop-page"> 
            {collections.map(({ id, ...otherCollectionProps }) =>(
                    <CollectionPreview key ={id} {...otherCollectionProps} />

                ))
            }
        </div>
        );
    }
}

export default ShopPage;