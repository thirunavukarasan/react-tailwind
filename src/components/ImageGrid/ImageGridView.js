import React from 'react';
import './ImageGridView.css';
import Button from 'react-bootstrap/Button';

// function ImageGridView(props) {
//     console.log(props)
// 	return (
// 		<>
//             <h2>{ props.viewHeading }</h2>
//             {
//                 props.images.map((imgObj, index) => {
//                     return (
//                         <div className="imageContainer" key={index} >
//                             <img className="img-top" src={imgObj.imgUrl} />
//                             <h3>
//                                 {imgObj.heading}
//                             </h3>
//                             <p>
//                                 {imgObj.content}
//                             </p>
//                         </div>
//                     )
//                 })    
//             }
			
// 		</>
// 	);
// }


class ImageGridView extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {count: 0};
        //this.countIncrement = this.countIncrement.bind(this)
    }

    countIncrement() {
        console.log("dsff")
        this.setState(state => ({
            count: state.count++
        }));
    }

    render() {
        return (
            <>
                <h2>{ this.props.viewHeading }</h2>
                <button className="btn btn-success" onClick={() => this.countIncrement()}>{this.state.count}</button>
                {
                    this.props.images.map((imgObj, index) => {
                        return (
                            <div className="imageContainer" key={index} >
                                <img className="img-top" src={imgObj.imgUrl} />
                                <h3>
                                    {imgObj.heading}
                                </h3>
                                <p>
                                    {imgObj.content}
                                </p>
                            </div>
                        )
                    })    
                }
                
            </>
        );
    }
	
}

export default ImageGridView;