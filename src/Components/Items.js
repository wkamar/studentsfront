import React, {Component} from 'react';

class Items extends Component{
    render(){
        const Id = this.props.Id;
        const Name = this.props.Name;
        const Age = this.props.Age;
        return(
            <div>
                <p>ID = {Id}</p>
                <p>Name = {Name}</p>
                <p>Age = {Age}</p>
            </div>

        );
    }
}

export default Items;