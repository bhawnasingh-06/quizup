import React from 'react'

const PageNotFound = () => {
  return (
    <div class="container" style={{paddingTop:"3rem"}}>
    <div class="row">
        <div class="col-md-12">
            <div class="error-template" style={{padding: "40px 15px",textAlign: "center",}}>
                <h1>
                    Oops!</h1>
                <h2>
                    404 Not Found</h2>
                <div class="error-details">
                    Sorry, an error has occured, Requested page not found!
                </div>
                <div class="error-actions" style={{marginTop:"15px",marginBottom:"15px"}}>
                    <a href="/" class="btn btn-primary btn-lg" style={{marginRight:"10px"}}> <i className="fa fa-home" style={{marginRight:"10px"}}> </i>Take Me Home </a>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default PageNotFound