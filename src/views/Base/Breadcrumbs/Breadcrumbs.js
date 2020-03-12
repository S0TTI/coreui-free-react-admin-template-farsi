import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

class Breadcrumbs extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>نمایش ادرس محل فعلی</strong>
                <div className="card-header-actions">
                  <a href="https://reactstrap.github.io/components/breadcrumbs/" rel="noreferrer noopener" target="_blank" className="card-header-action">
                    <small className="text-muted">سند</small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>
                <Breadcrumb>
                  <BreadcrumbItem active>خانه</BreadcrumbItem>
                </Breadcrumb>
                <Breadcrumb>
                  {/*eslint-disable-next-line*/}
                  <BreadcrumbItem><a href="#">خانه</a></BreadcrumbItem>
                  <BreadcrumbItem active>کتابخانه</BreadcrumbItem>
                </Breadcrumb>
                <Breadcrumb>
                  {/*eslint-disable-next-line*/}
                  <BreadcrumbItem><a href="#">خانه</a></BreadcrumbItem>
                  {/* eslint-disable-next-line*/}
                  <BreadcrumbItem><a href="#">کاب خانه</a></BreadcrumbItem>
                  <BreadcrumbItem active>داده‌ها</BreadcrumbItem>
                </Breadcrumb>
                <Breadcrumb tag="nav">
                  <BreadcrumbItem tag="a" href="#">خانه</BreadcrumbItem>
                  <BreadcrumbItem tag="a" href="#">کاتبهانه</BreadcrumbItem>
                  <BreadcrumbItem tag="a" href="#">اده ها</BreadcrumbItem>
                  <BreadcrumbItem active tag="span">بوت استرپ</BreadcrumbItem>
                </Breadcrumb>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Breadcrumbs;
