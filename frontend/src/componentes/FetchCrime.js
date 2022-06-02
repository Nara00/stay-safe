

class FetchCrime extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            location: []
        }
    }

    componentDidMount() {
        this.fetchBooks();
    }

    fetchBooks = async () => {
        const response = await fetch("http://localhost:3001/crimes");
        const data = await response.json();
        console.log(data)
        this.setState({ location: data });
    }

    // displayMarkers = () => {
    //     return this.state.location.map((loc, index) => {
    //         return <Marker key={index} id={index} position={{
    //             lat: loc.latitude,
    //             lng: loc.longitude
    //         }}
    //             onClick={() => console.log("You clicked me!")} />
    //     })
    // }
    // displayMarkers = () => {
    //     return this.state.location.map((loc, index) => {
    //         return <HeatMap key={index} id={index}
    //             positions={{
    //                 lat: loc.latitude,
    //                 lng: loc.longitude
    //             }}
    //             gradient={gradient}
    //             opacity={100}
    //             radius={100}
    //         />
    //     })
    // }

    render() {
        // const positions = this.state.location.map(loc => {
        //     console.log(loc)
        //     return { lat: loc.latitude, lng: loc.longitude }
        // });
        return (
            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 37.775, lng: -122.434 }}
                onReady={this.handleMapReady}
            >
                {/* {this.displayMarkers()} */}
                <HeatMap
                    gradient={gradient}
                    positions={this.props.positions}
                    opacity={1}
                    radius={20}
                />

            </Map>
        );
    }
}


// const MapView2 = () => {
//     const gradient = [
//         "rgba(0, 255, 255, 0)",
//         "rgba(0, 255, 255, 1)",
//         "rgba(0, 191, 255, 1)",
//         "rgba(0, 127, 255, 1)",
//         "rgba(0, 63, 255, 1)",
//         "rgba(0, 0, 255, 1)",
//         "rgba(0, 0, 223, 1)",
//         "rgba(0, 0, 191, 1)",
//         "rgba(0, 0, 159, 1)",
//         "rgba(0, 0, 127, 1)",
//         "rgba(63, 0, 91, 1)",
//         "rgba(127, 0, 63, 1)",
//         "rgba(191, 0, 31, 1)",
//         "rgba(255, 0, 0, 1)"
//     ];
//     return (
//         <div className="map-container">
//             <Map
//                 google={google}
//                 className={"map"}
//                 zoom={4}
//                 initialCenter={{ lat: -24.9923319, lng: 135.2252427 }}
//                 onReady={this.handleMapReady}
//             >
//                 <HeatMap
//                     gradient={gradient}
//                     positions={this.props.data}
//                     opacity={1}
//                     radius={20}
//                 />
//             </Map>
//         </div>
//     );
// }
// AIzaSyC4irr_NtJq7GsuSJZxHpwT0b1HSB3ukks
export default GoogleApiWrapper({
    apiKey: "AIzaSyC4irr_NtJq7GsuSJZxHpwT0b1HSB3ukks",
    libraries: ["visualization"]
})(MapView2);