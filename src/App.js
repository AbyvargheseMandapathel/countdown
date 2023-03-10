// new component
import ComingSoon from './components/comingSoon/ComingSoon';
import bgVideo from './assets/bg.mp4'
function App() {
  return (
    // <div className="background">
    //   <video autoPlay loop muted
    //     style={{
    //       position: "absolute",
    //       width:"100%",
    //       height: "100%",
    //       objectFit: "cover",
    //       zIndex:"-1"
    //     }}
    //   >
    //     <source src={bgVideo} type="video/mp4" />
    //   </video>
      <ComingSoon/>
    // </div>
  );
}

export default App;