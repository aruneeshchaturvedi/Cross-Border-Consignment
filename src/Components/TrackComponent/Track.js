function Track(){
    return(
        <>


{/* <!-- track section --> */}

<section class="track_section layout_padding">
<div class="track_bg_box">
  <img src="assets/images/track-bg.jpg" alt="" />
</div>
<div class="container">
  <div class="row">
    <div class="col-md-10">
      <div class="heading_container">
        <h2>
         <b> Track Your</b> <span> <b>Shipment</b> </span>
        </h2>
      </div>
      <p>
      It'll need the tracking number or the name of the shipping carrier you're using. Once you provide that information, I can assist you in tracking your package.
      Track your shipping refers to the process of monitoring the journey of a package from its origin to its destination.  
      Tracking allows both senders and recipients to stay informed about the progress of their packages and ensure they arrive safely and on time.
      </p>
      <form action="">
        <input type="text" placeholder="Enter Your Tracking Number" />
        <button type="submit">
         <b>Track</b>
        </button>
      </form>
    </div>
  </div>
</div>
</section>
<br/>


{/* <!-- end track section --> */}

</>
    )
}
export default Track;