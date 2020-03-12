import React, { Component } from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade } from 'reactstrap';
import { AppSwitch } from '@coreui/react'

class Cards extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" md="4">
            <Card>
              <CardHeader>
                عنوان کارت
              </CardHeader>
              <CardBody>
                این پنل ادمین توسط شعیب اکبری فارسی سازی شده است در اینجا این متن یک تست است برای این که شما به 
                صورت مناسب متن شکل مورد نظرتان را ببنید این متن یک تست است این متن یک تست است 
                این متن یک تست است این متن یک تست است این متن یک تست است
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card>
              <CardBody>
              این پنل ادمین توسط شعیب اکبری فارسی سازی شده است در اینجا این متن یک تست است برای این که شما به 
                صورت مناسب متن شکل مورد نظرتان را ببنید این متن یک تست است این متن یک تست است 
                این متن یک تست است این متن یک تست است این متن یک تست است
              </CardBody>
              <CardFooter>کارت همراه با فوتر</CardFooter>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card>
              <CardHeader>
                کارت همراه با ایکون
                <div className="card-header-actions">
                  <i className="fa fa-check float-right"></i>
                </div>
              </CardHeader>
              <CardBody>
              این پنل ادمین توسط شعیب اکبری فارسی سازی شده است در اینجا این متن یک تست است برای این که شما به 
                صورت مناسب متن شکل مورد نظرتان را ببنید این متن یک تست است این متن یک تست است 
                این متن یک تست است این متن یک تست است این متن یک تست است
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card>
              <CardHeader>
                کارت همراه با کلید
                <div className="card-header-actions">
                  <AppSwitch className={'float-right mb-0'} label color={'info'} defaultChecked size={'sm'}/>
                </div>
              </CardHeader>
              <CardBody>
              این پنل ادمین توسط شعیب اکبری فارسی سازی شده است در اینجا این متن یک تست است برای این که شما به 
                صورت مناسب متن شکل مورد نظرتان را ببنید این متن یک تست است این متن یک تست است 
                این متن یک تست است این متن یک تست است این متن یک تست است
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card>
              <CardHeader>
                کارت همراه با برچسب
                <div className="card-header-actions">
                  <Badge color="success" className="float-right">موفقیت</Badge>
                </div>
              </CardHeader>
              <CardBody>
              این پنل ادمین توسط شعیب اکبری فارسی سازی شده است در اینجا این متن یک تست است برای این که شما به 
                صورت مناسب متن شکل مورد نظرتان را ببنید این متن یک تست است این متن یک تست است 
                این متن یک تست است این متن یک تست است این متن یک تست است
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card>
              <CardHeader>
                کارت همراه با لیبل
                <div className="card-header-actions">
                  <Badge pill color="danger" className="float-right">42</Badge>
                </div>
              </CardHeader>
              <CardBody>
                 این پنل ادمین توسط شعیب اکبری فارسی سازی شده است در اینجا این متن یک تست است برای این که شما به 
                صورت مناسب متن شکل مورد نظرتان را ببنید این متن یک تست است این متن یک تست است 
                این متن یک تست است این متن یک تست است این متن یک تست است
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" md="4">
            <Card className="border-primary">
              <CardHeader>
              کارت با رنگ بندی دور مدل اصلی
              </CardHeader>
              <CardBody>
                 این پنل ادمین توسط شعیب اکبری فارسی سازی شده است در اینجا این متن یک تست است برای این که شما به 
                صورت مناسب متن شکل مورد نظرتان را ببنید این متن یک تست است این متن یک تست است 
                این متن یک تست است این متن یک تست است این متن یک تست است
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="border-secondary">
              <CardHeader>
                کارت با رنگ بندی دور مدل دوم
              </CardHeader>
              <CardBody>
              این پنل ادمین توسط شعیب اکبری فارسی سازی شده است در اینجا این متن یک تست است برای این که شما به 
                صورت مناسب متن شکل مورد نظرتان را ببنید این متن یک تست است این متن یک تست است 
                این متن یک تست است این متن یک تست است این متن یک تست است
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="border-success">
              <CardHeader>
                کارت با رنگ بندی دور مدل موفق
              </CardHeader>
              <CardBody>
              این پنل ادمین توسط شعیب اکبری فارسی سازی شده است در اینجا این متن یک تست است برای این که شما به 
                صورت مناسب متن شکل مورد نظرتان را ببنید این متن یک تست است این متن یک تست است 
                این متن یک تست است این متن یک تست است این متن یک تست است
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="border-info">
              <CardHeader>
                کارت با رنگ بندی دور مدل اطلاعات
              </CardHeader>
              <CardBody>
              این پنل ادمین توسط شعیب اکبری فارسی سازی شده است در اینجا این متن یک تست است برای این که شما به 
                صورت مناسب متن شکل مورد نظرتان را ببنید این متن یک تست است این متن یک تست است 
                این متن یک تست است این متن یک تست است این متن یک تست است
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="border-warning">
              <CardHeader>
                کارت با رنگ بندی دور مدل هشدار
              </CardHeader>
              <CardBody>
                 این پنل ادمین توسط شعیب اکبری فارسی سازی شده است در اینجا این متن یک تست است برای این که شما به 
                صورت مناسب متن شکل مورد نظرتان را ببنید این متن یک تست است این متن یک تست است 
                این متن یک تست است این متن یک تست است این متن یک تست است
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="border-danger">
              <CardHeader>
                کارت با رنگ بندی دور مدل خطر
              </CardHeader>
              <CardBody>
                 این پنل ادمین توسط شعیب اکبری فارسی سازی شده است در اینجا این متن یک تست است برای این که شما به 
                صورت مناسب متن شکل مورد نظرتان را ببنید این متن یک تست است این متن یک تست است 
                این متن یک تست است این متن یک تست است این متن یک تست است
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xs="12" sm="6" md="4">
            <Card className="card-accent-primary">
              <CardHeader>
                کارت مدل تاکید
              </CardHeader>
              <CardBody>
                 این پنل ادمین توسط شعیب اکبری فارسی سازی شده است در اینجا این متن یک تست است برای این که شما به 
                صورت مناسب متن شکل مورد نظرتان را ببنید این متن یک تست است این متن یک تست است 
                این متن یک تست است این متن یک تست است این متن یک تست است
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="card-accent-secondary">
              <CardHeader>
                کارت مدل تاکید
              </CardHeader>
              <CardBody>
                 این پنل ادمین توسط شعیب اکبری فارسی سازی شده است در اینجا این متن یک تست است برای این که شما به 
                صورت مناسب متن شکل مورد نظرتان را ببنید این متن یک تست است این متن یک تست است 
                این متن یک تست است این متن یک تست است این متن یک تست است
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="card-accent-success">
              <CardHeader>
               کارت مدل تاکید
              </CardHeader>
              <CardBody>
                 این پنل ادمین توسط شعیب اکبری فارسی سازی شده است در اینجا این متن یک تست است برای این که شما به 
                صورت مناسب متن شکل مورد نظرتان را ببنید این متن یک تست است این متن یک تست است 
                این متن یک تست است این متن یک تست است این متن یک تست است
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="card-accent-info">
              <CardHeader>
                کارت مدل تاکید
              </CardHeader>
              <CardBody>
                 این پنل ادمین توسط شعیب اکبری فارسی سازی شده است در اینجا این متن یک تست است برای این که شما به 
                صورت مناسب متن شکل مورد نظرتان را ببنید این متن یک تست است این متن یک تست است 
                این متن یک تست است این متن یک تست است این متن یک تست است
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="card-accent-warning">
              <CardHeader>
                کارت مدل تاکید
              </CardHeader>
              <CardBody>
                 این پنل ادمین توسط شعیب اکبری فارسی سازی شده است در اینجا این متن یک تست است برای این که شما به 
                صورت مناسب متن شکل مورد نظرتان را ببنید این متن یک تست است این متن یک تست است 
                این متن یک تست است این متن یک تست است این متن یک تست است
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="card-accent-danger">
              <CardHeader>
                کارت مدل تاکید
              </CardHeader>
              <CardBody>
                 این پنل ادمین توسط شعیب اکبری فارسی سازی شده است در اینجا این متن یک تست است برای این که شما به 
                صورت مناسب متن شکل مورد نظرتان را ببنید این متن یک تست است این متن یک تست است 
                این متن یک تست است این متن یک تست است این متن یک تست است
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-primary text-center">
              <CardBody>
                <blockquote className="card-bodyquote">
                  <p>این پنل ادمین توسط شعیب اکبری فارسی سازی شده است</p>
                  <footer>یه چیز مهم اینجا<cite title="Source Title">عنوان منبع</cite></footer>
                </blockquote>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-success text-center">
              <CardBody>
                <blockquote className="card-bodyquote">
                  <p>این پنل ادمین توسط شعیب اکبری فارسی سازی شده است</p>
                  <footer>یه چیز مهم اینجا<cite title="Source Title">عنوان منبع</cite></footer>
                </blockquote>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-info text-center">
              <CardBody>
                <blockquote className="card-bodyquote">
                  <p>این پنل ادمین توسط شعیب اکبری فارسی سازی شده است</p>
                  <footer>یه چیز مهم اینجا<cite title="Source Title">عنوان منبع</cite></footer>
                </blockquote>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-warning text-center">
              <CardBody>
                <blockquote className="card-bodyquote">
                  <p>این پنل ادمین توسط شعیب اکبری فارسی سازی شده است</p>
                  <footer>یه چیز مهم اینجا<cite title="Source Title">عنوان منبع</cite></footer>
                </blockquote>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-danger text-center">
              <CardBody>
                <blockquote className="card-bodyquote">
                  <p>این پنل ادمین توسط شعیب اکبری فارسی سازی شده است</p>
                  <footer>یه چیز مهم اینجا<cite title="Source Title">عنوان منبع</cite></footer>
                </blockquote>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-primary text-center">
              <CardBody>
                <blockquote className="card-bodyquote">
                  <p>این پنل ادمین توسط شعیب اکبری فارسی سازی شده است</p>
                  <footer>یه چیز مهم اینجا<cite title="Source Title">عنوان منبع</cite></footer>
                </blockquote>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-primary">
              <CardHeader>
                عنوان کارت
              </CardHeader>
              <CardBody>
                 این پنل ادمین توسط شعیب اکبری فارسی سازی شده است در اینجا این متن یک تست است برای این که شما به 
                صورت مناسب متن شکل مورد نظرتان را ببنید این متن یک تست است این متن یک تست است 
                این متن یک تست است این متن یک تست است این متن یک تست است
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-success">
              <CardHeader>
                عنوان کارت
              </CardHeader>
              <CardBody>
                 این پنل ادمین توسط شعیب اکبری فارسی سازی شده است در اینجا این متن یک تست است برای این که شما به 
                صورت مناسب متن شکل مورد نظرتان را ببنید این متن یک تست است این متن یک تست است 
                این متن یک تست است این متن یک تست است این متن یک تست است
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-info">
              <CardHeader>
                عنوان کارت
              </CardHeader>
              <CardBody>
                 این پنل ادمین توسط شعیب اکبری فارسی سازی شده است در اینجا این متن یک تست است برای این که شما به 
                صورت مناسب متن شکل مورد نظرتان را ببنید این متن یک تست است این متن یک تست است 
                این متن یک تست است این متن یک تست است این متن یک تست است
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-warning">
              <CardHeader>
                عنوان کارت
              </CardHeader>
              <CardBody>
                 این پنل ادمین توسط شعیب اکبری فارسی سازی شده است در اینجا این متن یک تست است برای این که شما به 
                صورت مناسب متن شکل مورد نظرتان را ببنید این متن یک تست است این متن یک تست است 
                این متن یک تست است این متن یک تست است این متن یک تست است
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-danger">
              <CardHeader>
                عنوان کارت
              </CardHeader>
              <CardBody>
                 این پنل ادمین توسط شعیب اکبری فارسی سازی شده است در اینجا این متن یک تست است برای این که شما به 
                صورت مناسب متن شکل مورد نظرتان را ببنید این متن یک تست است این متن یک تست است 
                این متن یک تست است این متن یک تست است این متن یک تست است
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card>
                <CardHeader>
                  کارت همراه با واکنش
                  <div className="card-header-actions">
                    {/*eslint-disable-next-line*/}
                    <a href="#" className="card-header-action btn btn-setting"><i className="icon-settings"></i></a>
                    {/*eslint-disable-next-line*/}
                    <a className="card-header-action btn btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className="icon-arrow-up"></i></a>
                    {/*eslint-disable-next-line*/}
                    <a className="card-header-action btn btn-close" onClick={this.toggleFade}><i className="icon-close"></i></a>
                  </div>
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>
                  این پنل ادمین توسط شعیب اکبری فارسی سازی شده است در اینجا این متن یک تست است برای این که شما به 
                صورت مناسب متن شکل مورد نظرتان را ببنید این متن یک تست است این متن یک تست است 
                این متن یک تست است این متن یک تست است این متن یک تست است
                  </CardBody>
                </Collapse>
              </Card>
            </Fade>
          </Col>

        </Row>
      </div>
    );
  }
}

export default Cards;
