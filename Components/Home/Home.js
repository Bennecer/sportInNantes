import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount(){
        this.setState({
            isLoading: false
        })
    }

    _displayLoading(){
        if(this.state.isLoading){
            return(
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large'/>
                </View>
            )
        }
    }

    render(){
        return(
            <View style={styles.main_container}>
                {this._displayLoading()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Home;