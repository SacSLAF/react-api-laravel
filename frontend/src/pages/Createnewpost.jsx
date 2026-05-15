// src/pages/Createnewpost.jsx

import React, { useState } from 'react'
import { Link } from 'react-router'

export default function Createnewpost() {

  const [sidebar, setSidebar] = useState(false)

  return (
    <>

      <div className="dashboard">

        {/* MAIN */}
        <main className="main-content">

          {/* TOPBAR */}
          <div className="topbar">

            <div className="d-flex align-items-center gap-3">

              <button
                className="mobile-toggle"
                onClick={() => setSidebar(!sidebar)}
              >
                <i className="bi bi-list"></i>
              </button>

              <div className="page-title">
                <h2>Create New Post</h2>
              </div>

            </div>

            <div className="topbar-right">

              <Link
                to="/"
                className="btn btn-light text-decoration-none"
              >
                <i className="bi bi-arrow-left me-2"></i>
                Back
              </Link>

            </div>

          </div>

          {/* FORM CARD */}
          <div className="dashboard-card">

            <div className="card-header-custom">
              <h4>Post Details</h4>
            </div>

            <form>

              <div className="row">

                {/* TITLE */}
                <div className="col-12 mb-4">

                  <label className="form-label fw-semibold">
                    Post Title
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter post title"
                  />

                </div>

                {/* AUTHOR */}
                <div className="col-md-6 mb-4">

                  <label className="form-label fw-semibold">
                    Author
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter author name"
                  />

                </div>

                {/* CATEGORY */}
                <div className="col-md-6 mb-4">

                  <label className="form-label fw-semibold">
                    Category
                  </label>

                  <select className="form-control">

                    <option value="">
                      Select Category
                    </option>

                    <option>Technology</option>
                    <option>Business</option>
                    <option>Education</option>
                    <option>News</option>

                  </select>

                </div>

                {/* STATUS */}
                <div className="col-md-6 mb-4">

                  <label className="form-label fw-semibold">
                    Status
                  </label>

                  <select className="form-control">

                    <option value="">
                      Select Status
                    </option>

                    <option>Published</option>
                    <option>Draft</option>

                  </select>

                </div>

                {/* DATE */}
                <div className="col-md-6 mb-4">

                  <label className="form-label fw-semibold">
                    Publish Date
                  </label>

                  <input
                    type="date"
                    className="form-control"
                  />

                </div>

                {/* CONTENT */}
                <div className="col-12 mb-4">

                  <label className="form-label fw-semibold">
                    Content
                  </label>

                  <textarea
                    rows="8"
                    className="form-control"
                    placeholder="Write your post content..."
                  ></textarea>

                </div>

                {/* IMAGE */}
                <div className="col-12 mb-4">

                  <label className="form-label fw-semibold">
                    Featured Image
                  </label>

                  <input
                    type="file"
                    className="form-control"
                  />

                </div>

                {/* BUTTONS */}
                <div className="col-12">

                  <div className="d-flex flex-wrap gap-3">

                    <button
                      type="submit"
                      className="btn-custom btn-primary-custom"
                    >
                      <i className="bi bi-check-lg me-2"></i>
                      Publish Post
                    </button>

                    <button
                      type="button"
                      className="btn btn-light px-4"
                    >
                      Save Draft
                    </button>

                  </div>

                </div>

              </div>

            </form>

          </div>

        </main>

      </div>

    </>
  )
}