package plugin

import "time"

// apiMetrics is a struct containing a slice of dataPoint
type apiMetrics struct {
	DataPoints []apiDataPoint `json:"data"`
}

// apiDataPoint is a single data point with a timestamp and a float value
type apiDataPoint struct {
	Time  time.Time `json:"time"`
	Value float64   `json:"value"`
}

type apiQuery struct {
	Scale string `json:"multiplier"`
}

type MyCookies struct {
	cookieValue string `json:"cookieValue"`
	cookieName string `json:"cookieName"`
}  
