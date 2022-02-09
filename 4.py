import plotly.express as px
import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("iris.csv")

fig = px.scatter_3d(df, x='sepal_width', y='sepal_length', z='petal_width', color='class',
                    color_discrete_map={'sepal_width': 'red', 'sepal_length': 'green', 'petal_width': 'black'}
                    )
fig.update_layout(title='3d Scatter Plot', autosize=False,
                  width=500, height=500,
                  margin=dict(l=65, r=50, b=65, t=90))
fig.show
fig.write_html("4.html")