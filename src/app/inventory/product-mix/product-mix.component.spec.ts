import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMixComponent } from './product-mix.component';

describe('ProductMixComponent', () => {
  let component: ProductMixComponent;
  let fixture: ComponentFixture<ProductMixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductMixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductMixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
