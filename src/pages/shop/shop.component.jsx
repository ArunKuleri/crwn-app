import React from 'react';
import SHOP_DATA from './shop.data';
import  CollectionPreview from '../../component/Collection-preview/collection-preview.component';


class shopPage extends React.Component {
    constructor(props){
        super(props);

        this.state={
            collections:SHOP_DATA
        };
    }
render(){
    const {collections}=this.state;
    return (<div className='shop-page'> 
        {collections.map(({id,...otherCollectionProps}) =>(
        <CollectionPreview key={id} {...otherCollectionProps}/>
        ))}

    </div>
    );
        }
    }
export default shopPage;