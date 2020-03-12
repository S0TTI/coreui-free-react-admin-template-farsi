import React, { Component } from "react";
import { Alert, Card, CardBody, CardHeader, Col, Row } from "reactstrap";

class Alerts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>
                <strong>هشدارها</strong>
                <div className="card-header-actions">
                  <a
                    href="https://reactstrap.github.io/components/alerts/"
                    rel="noreferrer noopener"
                    target="_blank"
                    className="card-header-action"
                  >
                    <small className="text-muted">اسناد</small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>
                <Alert color="primary">
                  این یک primary alert است — آن را بررسی کنی!
                </Alert>
                <Alert color="secondary">
                  این یک secondary alert است — آن را بررسی کنی!
                </Alert>
                <Alert color="success">
                  این یک success alert است — آن را بررسی کنی!
                </Alert>
                <Alert color="danger">
                  این یک danger alert است — آن را بررسی کنی!
                </Alert>
                <Alert color="warning">
                  این یک warning alert است — آن را بررسی کنی!
                </Alert>
                <Alert color="info">
                  این یک info alert است — آن را بررسی کنی!
                </Alert>
                <Alert color="light">
                  این یک light alert است — آن را بررسی کنی!
                </Alert>
                <Alert color="dark">
                  این یک dark alert است — آن را بررسی کنی!
                </Alert>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>
                <strong>هشدارها</strong>
                <small className="ml-2">
                  {" "}
                  از ویژگی <code>.alert-link</code> برای اضافه کردن لینک استفاده
                  کنید
                </small>
              </CardHeader>
              <CardBody>
                <Alert color="primary">
                  {/*eslint-disable-next-line*/}
                  این یک primary alert همراه با{" "}
                  <a href="#" className="alert-link">
                    یک متن لینک دار مثال است
                  </a>
                  . اگر مایل هستید روی ان کلیک کنید.
                </Alert>
                <Alert color="secondary">
                  {/*eslint-disable-next-line*/}
                  این یک secondary alert همراه با{" "}
                  <a href="#" className="alert-link">
                    یک متن لینک دار مثال است
                  </a>
                  . اگر مایل هستید روی ان کلیک کنید.
                </Alert>
                <Alert color="success">
                  {/*eslint-disable-next-line*/}
                  این یک success alert همراه با{" "}
                  <a href="#" className="alert-link">
                    یک متن لینک دار مثال است
                  </a>
                  . اگر مایل هستید روی ان کلیک کنید.
                </Alert>
                <Alert color="danger">
                  {/*eslint-disable-next-line*/}
                  این یک danger alert همراه با{" "}
                  <a href="#" className="alert-link">
                    یک متن لینک دار مثال است
                  </a>
                  . اگر مایل هستید روی ان کلیک کنید.
                </Alert>
                <Alert color="warning">
                  {/*eslint-disable-next-line*/}
                  این یک warning alert همراه با{" "}
                  <a href="#" className="alert-link">
                    یک متن لینک دار مثال است
                  </a>
                  . اگر مایل هستید روی ان کلیک کنید.
                </Alert>
                <Alert color="info">
                  {/*eslint-disable-next-line*/}
                  این یک info alert همراه با{" "}
                  <a href="#" className="alert-link">
                    یک متن لینک دار مثال است
                  </a>
                  . اگر مایل هستید روی ان کلیک کنید.
                </Alert>
                <Alert color="light">
                  {/*eslint-disable-next-line*/}
                  این یک light alert همراه با{" "}
                  <a href="#" className="alert-link">
                    یک متن لینک دار مثال است
                  </a>
                  . اگر مایل هستید روی ان کلیک کنید.
                </Alert>
                <Alert color="dark">
                  {/*eslint-disable-next-line*/}
                  این یک dark alert همراه با{" "}
                  <a href="#" className="alert-link">
                    یک متن لینک دار مثال است
                  </a>
                  . اگر مایل هستید روی ان کلیک کنید.
                </Alert>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>
                <strong>هشدارها</strong>
                <small className="ml-2"> همراه با یک محتوای اضافی</small>
              </CardHeader>
              <CardBody>
                <Alert color="success">
                  <h4 className="alert-heading">بسیار عالی!</h4>
                  <p>
                    بله ، شما این پیام هشدار مهم را با موفقیت خواندید. این متن
                    یک مثال کمی طولانی است، بنابراین می توانید ببینید که فاصله
                    بین هشدار با این نوع محتوا چگونه کار می کند.
                  </p>
                  <hr />
                  <p className="mb-0">
                    هر وقت لازم بود حتما از ابزارهای حاشیه ای استفاده کنید تا
                    همه چیز خوب و مرتب باشد.
                  </p>
                </Alert>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>
                <strong> هشدارها</strong>
                <small className="ml-2">همراه با قابلیت حذف شدن</small>
              </CardHeader>
              <CardBody>
                <Alert
                  color="info"
                  isOpen={this.state.visible}
                  toggle={this.onDismiss}
                >
                  من یک پیام همراه با قابلیت از بین رفتن هستم!
                </Alert>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Alerts;
