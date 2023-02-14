import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './comps/NotFound'
import Posts from './comps/Posts'
import Post from './comps/Post'
import './App.css'
const LazyLoad = React.lazy(()=> import('./comps/LazyLoad'))
import {ErrorBoundary} from 'react-error-boundary'

function App() {

  return (
    <div className="px-3 py-2 bg-blue-50">
      <Router >
        <Routes>
          <Route exact path='/' element={<Posts />} />
          <Route path='/lazy' element={
             <ErrorBoundary
                FallbackComponent={NotFound}
                onReset={() => {
                // reset the state of your app so the error doesn't happen again
              }}
             >
             <Suspense fallback={<Post />}>
              <LazyLoad />
             </Suspense>
            </ErrorBoundary>
            } 
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
