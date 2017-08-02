import netuitive
import time
import os

from pympler import tracker

tracker = tracker.SummaryTracker()

ApiClient = netuitive.Client(url=os.environ.get('API_URL'), api_key=os.environ.get('CUSTOM_API_KEY'))

MyElement = netuitive.Element()

counter = 1

while True:
    print 'Sending in data'
    timestamp = int(time.mktime(time.gmtime()))
    MyElement.add_sample('app.error-' + str(counter), timestamp, 1, host='appserver01')

    ApiClient.post(MyElement)

    MyElement.clear_samples()

    tracker.print_diff()

    counter += 1

    time.sleep(5)
