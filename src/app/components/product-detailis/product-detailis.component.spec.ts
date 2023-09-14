import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailisComponent } from './product-detailis.component';

describe('ProductDetailisComponent', () => {
  let component: ProductDetailisComponent;
  let fixture: ComponentFixture<ProductDetailisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
