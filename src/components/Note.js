import { connect } from 'react-redux'
import React from 'react'
import { TickSignal } from 'tone/build/esm/core/clock/TickSignal';

class Note extends React.Component {
    constructor() {
        super();
        this.state = {
            position: 4,
            url: '',
            name: ''
        }
    }

    changePosition = (action) => {
        this.setState((state) => {
            let num = action === "plus" ? state.position += 1 : state.position -= 1
            return {
                position: num,
                url: `${this.parseNoteName(this.props.note).replace('♯', 's')}${num}.mp3`
            }
        })
    }

    parseNoteName = (note) => {
        let name;

        const noteNames = note.name.split('/')
        if (this.props.chosenKey.name[1] === ('♯') || this.props.chosenKey.name[1] === ('♭')) {
            name = noteNames.filter(name => (name[1] === this.props.chosenKey.name[1] || name.length === 1))[0]
        } else {
            name = noteNames[0]
        }

        this.setState({ name: name })

        return name
    }

    componentDidMount() {
        let name = this.parseNoteName(this.props.note).replace('♯', 's')
        this.setState({ url: `${name}4.mp3`})
    }

    componentDidUpdate() {
        this.props.updateChordNotes(this.state)
    }

    

    render() {
        return (
            <div>
                <h6 style={{display: 'block', float: 'left', marginRight: '50%'}}>{this.state.name}</h6>
                    {this.props.buttonAction === "remove" ?
                    <form>
                        <div onClick={() => this.changePosition("minus")} style={{display: 'block', float: 'left'}}>-</div>
                            <p style={{display: 'block', float: 'left'}}>{this.state.position}</p>
                        <div onClick={() => this.changePosition("plus")} style={{display: 'block', float: 'left'}}>+</div>
                    </form> :
                    null}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        chosenKey: state.keyReducer.chosenKey
    }
}

export default connect(mapStateToProps)(Note);