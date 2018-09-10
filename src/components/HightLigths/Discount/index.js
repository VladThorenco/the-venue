import React, {Component} from "react";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from "../../utills/MyButton";

class Discount extends Component {
    state = {
        discountStart: 0,
        discountEnd: 30
    };
    porcentage = () => {
        const {discountStart, discountEnd} = this.state;
        if (discountStart < discountEnd) {
            this.setState({
                discountStart: discountStart + 1
            })
        }
    };

    componentDidUpdate () {
        setTimeout(() => {
            this.porcentage();
        }, 30)
    }

    render() {
        return (
            <div className='center_wrapper'>
                <div className="discount_wrapper">

                    <Fade onReveal={() => this.porcentage()}>
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>

                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase tickets before 20th JUNE</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                                et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            <div>
                                <MyButton text='Purchase tickets' bck='#ffa800' color='#ffffff' link='http://google.com'/>
                            </div>
                        </div>
                    </Slide>

                </div>
            </div>
        )
    };
}

export default Discount;

