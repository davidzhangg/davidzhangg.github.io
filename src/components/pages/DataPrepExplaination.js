import React, {useEffect} from 'react'
import '../../Styles/DataPrepExplaination.css'
import { Link } from 'react-router-dom'

const DataPrepExplaination = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return (
        <div className="modal">
            <div className="modal-header">
                <div className="modal-title">Smart Data Prep - Analytics</div>
                <h3 className="subheader">(On-Going)</h3>
            </div>
            <div className="overview">
                <h2 className="overview-title">Overview</h2>
                <p className="overview-desc">
                    The purpose of this project is to create an efficient data preparation table that enable any user to cleanse and
                    qualify data on their own. In the world of big data, many businesses utilizes data analysis to find meaning in data,
                    so that the derived knowledge can be used to make informed decisions. The source code is currently private for proprietary
                    reasons, therefore the code will not be released as of now.
                </p>
            </div>
            <div className="my-role">
                <h2 className="my-role-header">What I've Done</h2>
                <ul className="resp">
                    <li className="role-lst">Designed and implemented TypeScript classes to organize different types of transformations to pass in our API calls</li>
                    <li className="role-lst">Utilized redux to manage the many states and data used across mulitple components</li>
                    <li className='role-lst'>Implemented many Scala functions to update the parquet file when a transformation is made to a particular column in the dataframe</li>
                    <li className='role-lst'>Proficient in working with Restful API endpoints and JSON</li>
                    <li className='role-lst'>Designed a framework that efficiently handles the transformation type passed in from the front end to call the corresponding scala function to perform the transformation on the requested column in Java</li>
                    <li className='role-lst'>Used D3.js to produce frequency bar graphs as a graphical illustration for each of the table columns</li>
                    <li className='role-lst'>Learned about the importance of folder structuring and the effectiveness when files begins to accumulate</li>
                </ul>
            </div>
            <div className="demo">
                <h2 className="func">How it works...</h2>
            </div>
            <figure className="dataPrep-img">
                <img 
                    className='screenshot-img'
                    src='/images/initial.png'
                    alt="initial state of dataprep table"
                />
                <figcaption className="explanation">
                    The image above is the initial table before anything is pressed or done to it.
                </figcaption>
            </figure>
            <figure className="dataPrep-img">
                <img 
                    className='screenshot-img'
                    src='/images/screenshot.png'
                    alt="dataprep with sidebar and suggestion bar opened"
                />
                <figcaption className="explanation">
                    Once a column is selected, it will display the highlighted column's information with the column profile sidebar. Below the 
                    table will also pop-up a smart suggestion bar that suggests a couple transformations that could be done to the specific column at the user's 
                    discretion.
                </figcaption>
            </figure>
            <figure className="dataPrep-img">
                <img 
                    className='screenshot-img'
                    src='/images/transformation.png'
                    alt="mouse hovering over a transformation type"
                />
                <figcaption className="explanation">
                    If we were to select a transformation to apply to the highlighted column, we would select on one of the suggested options 
                    (for example toUpperCase highlighted in blue). Once pressed, it would re-render the table with a new column with the exact same 
                    data, but in all uppercase. 
                </figcaption>
            </figure>
            <figure className="dataPrep-img">
                <img 
                    className='screenshot-img'
                    src='/images/endResult.png'
                    alt="transformation complete"
                />
                <figcaption className="explanation">
                    As you can see, the new highlighted column was produced by the transformation selected by the user and all it's data is now displayed
                    in uppercase. We are working on even more different types of transformations for different types of data columns, and even implementing
                    machine learning predictive models that could predict missing column values to fill in if needed.
                </figcaption>
            </figure>
            <div className="return-home">
                <Link to="/" rel="noreferrer" className="go-back">Go Back</Link>
            </div>
        </div>
    )
}

export default DataPrepExplaination
