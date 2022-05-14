# tcc

## Run Async

### Graphics

```
echo "GET http://localhost:3000/file/async" | vegeta attack -duration=30s -rate=100 -output=results-veg-async.bin && cat results-veg-async.bin | vegeta plot --title="HTTP Async GET 100 rps for 30 seconds" > async-get-100rps-30seconds.html
```

```
echo "GET http://localhost:3000/file/async" | vegeta attack -duration=30s -rate=50 -output=results-veg-async.bin && cat results-veg-async.bin | vegeta plot --title="HTTP Async GET 50 rps for 30 seconds" > async-get-50rps-30seconds.html
```

```
echo "GET http://localhost:3000/file/async" | vegeta attack -duration=30s -rate=25 -output=results-veg-async.bin && cat results-veg-async.bin | vegeta plot --title="HTTP Async GET 25 rps for 30 seconds" > async-get-25rps-30seconds.html
```

### Text

```
echo "GET http://localhost:3000/file/async" | vegeta attack -duration=30s -rate=100 | vegeta report --type=text > async100.txt
```

```
echo "GET http://localhost:3000/file/async" | vegeta attack -duration=30s -rate=50 | vegeta report --type=text > async50.txt
```

```
echo "GET http://localhost:3000/file/async" | vegeta attack -duration=30s -rate=25 | vegeta report --type=text > async25.txt
```


## Run Sync

### Graphics

```
echo "GET http://localhost:3000/file/sync" | vegeta attack -duration=30s -rate=100 -output=results-veg-sync.bin && cat results-veg-sync.bin | vegeta plot --title="HTTP Sync GET 100 rps for 30 seconds" > sync-get-100rps-30seconds.html
```

```
echo "GET http://localhost:3000/file/sync" | vegeta attack -duration=30s -rate=50 -output=results-veg-sync.bin && cat results-veg-sync.bin | vegeta plot --title="HTTP Sync GET 50 rps for 30 seconds" > sync-get-10rps-50seconds.html
```

```
echo "GET http://localhost:3000/file/sync" | vegeta attack -duration=30s -rate=25 -output=results-veg-sync.bin && cat results-veg-sync.bin | vegeta plot --title="HTTP Sync GET 25 rps for 30 seconds" > sync-get-10rps-25seconds.html
```

### Text

```
echo "GET http://localhost:3000/file/sync" | vegeta attack -duration=30s -rate=100 | vegeta report --type=text > sync100.txt
```

```
echo "GET http://localhost:3000/file/sync" | vegeta attack -duration=30s -rate=50 | vegeta report --type=text > sync50.txt
```

```
echo "GET http://localhost:3000/file/sync" | vegeta attack -duration=30s -rate=25 | vegeta report --type=text > sync25.txt
```
