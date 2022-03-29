import Navi from "./Navi";
import {Container , Row, Col} from "reactstrap"
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import React,{ Component } from "react";

export default class App extends Component{
  state={currentCategory:""};
  changeCategory=(category)=>{
    this.setState({currentCategory:category.categoryName});
  };
render(){
  let productInfo={title:"ProductList"};
  let categoryInfo={title:"CategoryList"}
 return( 
  <div>
    <h3>text</h3>
    <Navi/>
    <Container>
      <Row>
        <Col xs="3">
        <CategoryList 
        currentCategory={this.state.currentCategory}
        changeCategory={this.changeCategory}
        info={categoryInfo}/>
        </Col>
        <Col xs="9">
        <ProductList info={productInfo}/>
        </Col>
      </Row>
    </Container>
    
  </div>
 )
}
}