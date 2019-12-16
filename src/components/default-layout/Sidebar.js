import React from "react";
import "./Sidebar.js";
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
  render() {
    var { items } = this.props;
    return (
      <div
        className="col-2 collapse d-md-flex bg-faded pt-2 h-100"
        id="sidebar"
      >
        <ul className="nav flex-column">
          {items &&
            items.map(({ label, name, to, subItems }, index1) => {
              return (
                <li className="nav-item w-100" key={index1}>
                  {!subItems ? (
                    <Link
                      to={to}
                      onClick={() => (window.location.href = to)}
                      href={to}
                      className="nav-link collapsed"
                      data-toggle="collapse"
                      data-target={`#submenu${index1}`}
                    >
                      {label}
                    </Link>
                  ) : (
                    <span
                      className="nav-link collapsed"
                      data-toggle="collapse"
                      data-target={`#submenu${index1}`}
                    >
                      {label}
                    </span>
                  )}
                  <div
                    className="collapse"
                    id={`submenu${index1}`}
                    aria-expanded="false"
                  >
                    {Array.isArray(subItems) ? (
                      <ul className="flex-column pl-2 nav">
                        {subItems.map((subItem, index2) => {
                          return (
                            <li
                              className="nav-item"
                              key={index2}
                              style={{ width: "50%" }}
                            >
                              <Link
                                to={subItem.to}
                                onClick={() =>
                                  (window.location.href = subItem.to)
                                }
                                href={subItem.to}
                                className="nav-link collapsed"
                                data-toggle="collapse"
                                data-target={`#submenu${index1}`}
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    ) : null}
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}
export default Sidebar;
