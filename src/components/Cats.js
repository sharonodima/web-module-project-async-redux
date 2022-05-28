import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'


function Cats(props) {
    useEffect(() => {
        props.getCatImg();
    }, [])

    useEffect(() => {
        props.getCatFact();
    }, [])
    return (
        <>
            <form>
                <h2>{Object.values(props.facts)}</h2>
                <img id = "image" src={Object.values(props.cats)}/>
                <br/>
                <button onClick = {() => {
                    getCatFact();
                    getCatImg();
                }}>New Fact</button>
            </form>
        </>
    )
}

export default connect(st => st, actionCreators)(Cats)