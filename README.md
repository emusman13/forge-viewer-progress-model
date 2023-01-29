# viewer-single-backup
viewer repository for revit Mern app autodesk forge viewer

I have a 3D Revit model
I export that model to app using forge viewer.
In the model i have a phase parameter. This phase parameter is applied to all physical elements. Parameter have two values. It can either be constructed or Designed. 
Whichever element is constructed in the project i make the phase parameter constructed. and if the element is not constructed on site i leave it designed.
Then i export the data to mongo db. 
From mongodb data goes to MERN app through forge viewer.
On app i can see the colors of constructed and remaining elements.
All of the people in the project can see it as the progress model.


Here is the app https://viewer-single-7ekvi8ztm-emusman13.vercel.app/

and here is the explanatory video   https://youtu.be/jhu-EeepQkc  (Please dont mind the voice if not clear)


I want to add charts of constructed vs remaining in it.

Then i want to add authentication in it

Then I want to make it as VR app. In which we can use VR glasses to view complete model from inside too.
