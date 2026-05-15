import React, { useState } from 'react'
import { Link } from 'react-router'

export default function Home() {
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
                <h2>Posts Dashboard</h2>

              </div>

            </div>

            <div className="topbar-right">

              <Link
                to="/create-new-post"
                className="btn-custom btn-primary-custom text-decoration-none"
              >
                <i className="bi bi-plus-lg me-2"></i>
                New Post
              </Link>

            </div>

          </div>

          {/* POSTS CARD */}
          <div className="dashboard-card">

            <div className="card-header-custom">
              <h4>All Posts</h4>

              <div className="d-flex gap-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search posts..."
                />
              </div>
            </div>

            <div className="table-responsive">

              <table className="table align-middle">

                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>

                  {/* <tr>

                    <td>1</td>

                    <td>
                      <div className="post-title">
                        Sample Post Title
                      </div>
                    </td>

                    <td>Admin</td>

                    <td>Technology</td>

                    <td>
                      <span className="badge-custom">
                        Published
                      </span>
                    </td>

                    <td>15 May 2026</td>

                    <td>

                      <div className="d-flex justify-content-center gap-2">

                        <button
                          className="action-btn edit-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#editPostModal"
                        >
                          <i className="bi bi-pencil"></i>
                        </button>

                        <button className="action-btn delete-btn">
                          <i className="bi bi-trash"></i>
                        </button>

                      </div>

                    </td>

                  </tr> */}

                </tbody>

              </table>

            </div>

          </div>

        </main>

      </div>

      {/* NEW POST MODAL */}
      {/* NEW POST MODAL */}
      <div
        className="modal fade"
        id="newPostModal"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title fw-bold">
                Add New Post
              </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">

              <div className="row">

                {/* TITLE */}
                <div className="col-12 mb-3">
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
                <div className="col-md-6 mb-3">
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
                <div className="col-md-6 mb-3">
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
                <div className="col-md-6 mb-3">
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
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">
                    Publish Date
                  </label>

                  <input
                    type="date"
                    className="form-control"
                  />
                </div>

                {/* CONTENT */}
                <div className="col-12 mb-3">
                  <label className="form-label fw-semibold">
                    Content
                  </label>

                  <textarea
                    rows="6"
                    className="form-control"
                    placeholder="Write your post content..."
                  ></textarea>
                </div>

                {/* BUTTONS */}
                <div className="col-12">

                  <div className="d-flex justify-content-end gap-2">

                    <button
                      className="btn btn-light px-4"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>

                    <button className="btn-custom btn-primary-custom">
                      <i className="bi bi-check-lg me-2"></i>
                      Save Post
                    </button>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </div>

      {/* EDIT POST MODAL */}
      <div
        className="modal fade"
        id="editPostModal"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title fw-bold">
                Edit Post
              </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">

              <div className="row">

                {/* TITLE */}
                <div className="col-12 mb-3">
                  <label className="form-label fw-semibold">
                    Post Title
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Sample Post Title"
                  />
                </div>

                {/* AUTHOR */}
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">
                    Author
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Admin"
                  />
                </div>

                {/* CATEGORY */}
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">
                    Category
                  </label>

                  <select
                    className="form-control"
                    defaultValue="Technology"
                  >
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
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">
                    Status
                  </label>

                  <select
                    className="form-control"
                    defaultValue="Published"
                  >
                    <option value="">
                      Select Status
                    </option>

                    <option>Published</option>
                    <option>Draft</option>
                  </select>
                </div>

                {/* DATE */}
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">
                    Publish Date
                  </label>

                  <input
                    type="date"
                    className="form-control"
                    defaultValue="2026-05-15"
                  />
                </div>

                {/* CONTENT */}
                <div className="col-12 mb-3">
                  <label className="form-label fw-semibold">
                    Content
                  </label>

                  <textarea
                    rows="6"
                    className="form-control"
                    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  ></textarea>
                </div>

                {/* BUTTONS */}
                <div className="col-12">

                  <div className="d-flex justify-content-end gap-2">

                    <button
                      className="btn btn-light px-4"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>

                    <button className="btn-custom btn-primary-custom">
                      <i className="bi bi-arrow-repeat me-2"></i>
                      Update Post
                    </button>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}
