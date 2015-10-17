TODO:
- Replace absolute paths in annotations with the relative ones as soon as the issue [2383](https://github.com/angular/angular/issues/2383) is resolved:

```ts
// Before
@View({
  templateUrl: 'app/components/application/application.html',
  styleUrls: ['app/components/application/application.css']
})

// After
@View({
  templateUrl: 'application.html',
  styleUrls: ['application.css']
})
```
