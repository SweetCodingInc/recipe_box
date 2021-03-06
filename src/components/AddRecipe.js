import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Input} from 'reactstrap';
import {ShowRecipes} from './ShowRecipes';

export class AddRecipe extends React.Component {
    constructor(){
        super();
        this.state = {
            updated: [],
            show: false
        }
        this.toggle = this.toggle.bind(this);
        this.addInstructions = this.addInstructions.bind(this);
    }

    componentDidMount(){
        this.setState({
            updated: this.props.recipes
        });
    }

    toggle() {
        this.setState({
        show: !this.state.show
        });
    }

    addInstructions(){
        var name = $(".recipe-name").val();
        var instructions = $(".input-2").val();

        if(name === ''){
            alert('Please enter a name.');
            this.setState({
                show: true
            });
        } else {
            this.state.updated.push({title: name, instructions: instructions});
            this.setState({
                show: false
            });
        }
    }

    render(){
        return (
      <div>
        <Button color="info" onClick={this.toggle}>Add Recipe</Button>
        <Modal isOpen={this.state.show} toggle={this.toggle}>
           <ModalHeader toggle={this.toggle}>Add a new recipe</ModalHeader>
           <ModalBody>
              <h3>Name</h3>
              <Input className="recipe-name"/>
              <h3 className="instructions">Instructions</h3>
              <textarea cols="30" rows="7" className="input-2"></textarea>
           </ModalBody>
           <ModalFooter>
              <Button color="primary" onClick={this.addInstructions}>Add</Button>
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
           </ModalFooter>
        </Modal>
        <ShowRecipes recipes={this.state.updated} handleClick={this.toggle}/>
      </div>
        );
    }
 }